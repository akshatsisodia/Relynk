import { useEffect, useState } from 'react'
import Sidebar from './components/Sidebar'
import AppRoutes from './routes/AppRoutes'

const THEME_STORAGE_KEY = 'memora-theme'

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') {
      return 'light'
    }

    return window.localStorage.getItem(THEME_STORAGE_KEY) || 'light'
  })

  useEffect(() => {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme)
  }, [theme])

  function toggleTheme() {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <div className={theme === 'light' ? 'min-h-screen bg-gray-50 text-gray-900 transition-colors duration-300 ease-in-out' : 'min-h-screen bg-gray-950 text-gray-100 transition-colors duration-300 ease-in-out'}>
      <div className="flex min-h-screen">
        <Sidebar theme={theme} />

        <main className={theme === 'light' ? 'ml-60 flex-1 bg-gray-50 p-8 transition-colors duration-300 ease-in-out md:p-10' : 'ml-60 flex-1 bg-gray-950 p-8 transition-colors duration-300 ease-in-out md:p-10'}>
          <div className="mx-auto max-w-6xl">
            <AppRoutes theme={theme} toggleTheme={toggleTheme} />
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
