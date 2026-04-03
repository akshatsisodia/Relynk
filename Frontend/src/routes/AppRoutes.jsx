import { Navigate, Route, Routes } from 'react-router-dom'
import CollectionsPage from '../pages/CollectionsPage'
import SavePage from '../pages/SavePage'
import SearchPage from '../pages/SearchPage'

function PlaceholderPage({ title }) {
  return (
    <section className="flex min-h-[calc(100vh-5rem)] items-center justify-center">
      <div className="w-full max-w-2xl rounded-3xl border border-white/10 bg-slate-900/70 p-8 text-center">
        <h1 className="text-3xl font-semibold text-white">{title}</h1>
        <p className="mt-3 text-sm leading-7 text-slate-400">
          This section is ready for the next part of your knowledge app.
        </p>
      </div>
    </section>
  )
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SavePage />} />
      <Route path="/save" element={<SavePage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/graph-view" element={<PlaceholderPage title="Graph View" />} />
      <Route path="/collections" element={<CollectionsPage />} />
      <Route path="/resurfaced" element={<PlaceholderPage title="Resurfaced" />} />
      <Route path="/highlights" element={<PlaceholderPage title="Highlights" />} />
      <Route path="/settings" element={<PlaceholderPage title="Settings" />} />
      <Route path="/upgrade" element={<PlaceholderPage title="Upgrade" />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default AppRoutes
