import { useEffect, useState } from 'react'

export default function DashboardSummary() {
  const [summary, setSummary] = useState({ total_income: 0, total_expenses: 0, balance: 0 })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    // no auto fetch before auth; component prepared for future
  }, [])

  return (
    <section id="get-started" className="max-w-5xl mx-auto px-6 py-12">
      <div className="grid md:grid-cols-3 gap-6">
        <StatCard label="Total Income" value={`$${summary.total_income.toFixed(2)}`} color="text-emerald-400" />
        <StatCard label="Total Expenses" value={`$${summary.total_expenses.toFixed(2)}`} color="text-rose-400" />
        <StatCard label="Balance" value={`$${summary.balance.toFixed(2)}`} color="text-cyan-400" />
      </div>
      {error && <p className="text-rose-400 mt-4">{error}</p>}
    </section>
  )
}

function StatCard({ label, value, color }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
      <p className="text-sm text-blue-100/70">{label}</p>
      <p className={`mt-2 text-3xl font-bold ${color}`}>{value}</p>
    </div>
  )
}
