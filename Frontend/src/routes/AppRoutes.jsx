import { Navigate, Route, Routes } from 'react-router-dom'
import CollectionsPage from '../pages/CollectionsPage'
import Graph from '../pages/Graph'
import SavePage from '../pages/SavePage'
import SearchPage from '../pages/SearchPage'

function PlaceholderPage({ title, theme }) {
  return (
    <section className="flex min-h-[calc(100vh-5rem)] items-center justify-center">
      <div
        className={
          theme === 'light'
            ? 'w-full max-w-2xl rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-sm'
            : 'w-full max-w-2xl rounded-3xl border border-gray-800 bg-gray-900 p-8 text-center shadow-sm'
        }
      >
        <h1 className={theme === 'light' ? 'text-3xl font-semibold text-gray-900' : 'text-3xl font-semibold text-white'}>{title}</h1>
        <p className={theme === 'light' ? 'mt-3 text-sm leading-7 text-gray-600' : 'mt-3 text-sm leading-7 text-gray-400'}>
          This section is ready for the next part of your knowledge app.
        </p>
      </div>
    </section>
  )
}

function AppRoutes({ theme, toggleTheme }) {
  return (
    <Routes>
      <Route path="/" element={<SavePage theme={theme} toggleTheme={toggleTheme} />} />
      <Route path="/save" element={<SavePage theme={theme} toggleTheme={toggleTheme} />} />
      <Route path="/search" element={<SearchPage theme={theme} />} />
      <Route path="/graph" element={<Graph theme={theme} />} />
      <Route path="/graph-view" element={<Navigate to="/graph" replace />} />
      <Route path="/collections" element={<CollectionsPage theme={theme} />} />
      <Route path="/resurfaced" element={<PlaceholderPage title="Resurfaced" theme={theme} />} />
      <Route path="/highlights" element={<PlaceholderPage title="Highlights" theme={theme} />} />
      <Route path="/settings" element={<PlaceholderPage title="Settings" theme={theme} />} />
      <Route path="/upgrade" element={<PlaceholderPage title="Upgrade" theme={theme} />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default AppRoutes
