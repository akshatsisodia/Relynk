import Sidebar from './components/Sidebar'
import AppRoutes from './routes/AppRoutes'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="flex min-h-screen">
        <Sidebar />

        <main className="ml-60 flex-1 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.14),_transparent_28%),linear-gradient(180deg,_#020617_0%,_#0f172a_100%)] p-8 md:p-10">
          <div className="mx-auto max-w-6xl">
            <AppRoutes />
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
