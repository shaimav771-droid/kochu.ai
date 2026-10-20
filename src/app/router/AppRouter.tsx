import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ROUTES } from '@/shared/lib/config/routes'
import { MainLayout } from '@/layouts/MainLayout'
import { HomePage } from '@/features/home/HomePage'
import { AboutPage } from '@/features/about/AboutPage'
import { WorkWithMePage } from '@/features/work-with-me/WorkWithMePage'
import { ProgrammesPage } from '@/features/programmes/ProgrammesPage'
import { BusinessImpactPage } from '@/features/business-impact/BusinessImpactPage'
import { KochuAiPage } from '@/features/kochu-ai/KochuAiPage'
import { ResourcesPage } from '@/features/resources/ResourcesPage'

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path={ROUTES.ABOUT} element={<AboutPage />} />
          <Route path={ROUTES.WORK_WITH_ME} element={<WorkWithMePage />} />
          <Route path={ROUTES.PROGRAMMES} element={<ProgrammesPage />} />
          <Route path={ROUTES.BUSINESS_IMPACT} element={<BusinessImpactPage />} />
          <Route path={ROUTES.KOCHU_AI} element={<KochuAiPage />} />
          <Route path={ROUTES.RESOURCES} element={<ResourcesPage />} />

          {/* Backward compatibility redirects */}
          <Route path={ROUTES.MEDIA_KIT} element={<Navigate to={ROUTES.KOCHU_AI} replace />} />
          <Route path={ROUTES.EDUCATION} element={<Navigate to={ROUTES.PROGRAMMES} replace />} />
          <Route path={ROUTES.CONTENT} element={<Navigate to={ROUTES.KOCHU_AI} replace />} />
          <Route path={ROUTES.PARTNERSHIPS} element={<Navigate to={ROUTES.WORK_WITH_ME} replace />} />

          {/* Catch-all */}
          <Route path="*" element={<Navigate to={ROUTES.HOME} replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

