import { useState, useMemo, useCallback } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ResourceItem, ResourceCategory } from '../types/resource'
import { RESOURCES_DATA } from '../config/resourcesData'
import { useAppStore } from '@/shared/lib/store/useAppStore'

export function useResources() {
  const [searchParams, setSearchParams] = useSearchParams()
  const { addToast } = useAppStore()

  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<ResourceCategory>('All')

  // Read resource ID from URL query param ?id=slug
  const resourceIdFromUrl = searchParams.get('id')

  // Find active resource if id is present
  const activeResource = useMemo(() => {
    if (!resourceIdFromUrl) return null
    return RESOURCES_DATA.find((item) => item.id.toLowerCase() === resourceIdFromUrl.toLowerCase()) || null
  }, [resourceIdFromUrl])

  // Open / close resource modal by updating URL query parameter
  const selectResource = useCallback(
    (id: string | null) => {
      setSearchParams(
        (prev) => {
          const newParams = new URLSearchParams(prev)
          if (id) {
            newParams.set('id', id)
          } else {
            newParams.delete('id')
          }
          return newParams
        },
        { replace: false }
      )
    },
    [setSearchParams]
  )

  // Filter resources based on category and search query
  const filteredResources = useMemo(() => {
    return RESOURCES_DATA.filter((item) => {
      // Category filter
      if (selectedCategory !== 'All') {
        const matchesCategory =
          item.category === selectedCategory ||
          item.badges.some((badge) => {
            if (selectedCategory === 'Prompts') return badge === 'Prompt'
            if (selectedCategory === 'Documents') return badge === 'Doc / Guide'
            if (selectedCategory === 'Automation') return badge === 'Automation' || badge === 'Workflow'
            if (selectedCategory === 'Templates') return badge === 'Template'
            return false
          })
        if (!matchesCategory) return false
      }

      // Search query filter
      if (!searchQuery.trim()) return true

      const query = searchQuery.toLowerCase().trim()
      const titleMatch = item.title.toLowerCase().includes(query)
      const descMatch = item.description.toLowerCase().includes(query)
      const badgeMatch = item.badges.some((b) => b.toLowerCase().includes(query))
      const promptMatch = item.prompt?.text.toLowerCase().includes(query) || false
      const guideMatch = item.guide?.summary.toLowerCase().includes(query) || false
      const linkMatch = item.links?.some((l) => l.title.toLowerCase().includes(query)) || false

      return titleMatch || descMatch || badgeMatch || promptMatch || guideMatch || linkMatch
    })
  }, [selectedCategory, searchQuery])

  // Share helper to copy direct link to clipboard
  const copyShareLink = useCallback(
    async (resource: ResourceItem) => {
      const shareUrl = `${window.location.origin}/resources?id=${resource.id}`
      try {
        await navigator.clipboard.writeText(shareUrl)
        addToast(`Direct link copied: /resources?id=${resource.id}`, 'success')
      } catch {
        addToast('Failed to copy link', 'error')
      }
    },
    [addToast]
  )

  // Copy prompt helper with toast notification
  const copyPromptText = useCallback(
    async (promptText: string) => {
      try {
        await navigator.clipboard.writeText(promptText)
        addToast('Prompt copied to clipboard! Ready to paste into ChatGPT / Claude.', 'success')
      } catch {
        addToast('Failed to copy prompt', 'error')
      }
    },
    [addToast]
  )

  return {
    resources: RESOURCES_DATA,
    filteredResources,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    activeResource,
    selectResource,
    copyShareLink,
    copyPromptText,
  }
}
