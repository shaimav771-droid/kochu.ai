import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ROUTES } from '@/shared/lib/config/routes'
import { MainLayout } from '@/layouts/MainLayout'
import { HomePage } from '@/features/home/HomePage'
import { ResourcesPage } from '@/features/resources/ResourcesPage'

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path={ROUTES.RESOURCES} element={<ResourcesPage />} />
          <Route path="*" element={<Navigate to={ROUTES.HOME} replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
