import Hero from './components/Hero'
import DashboardSummary from './components/DashboardSummary'

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Hero />
      <DashboardSummary />
      <footer className="py-8 text-center text-blue-200/70">Built with Flames Blue</footer>
    </div>
  )
}

export default App
