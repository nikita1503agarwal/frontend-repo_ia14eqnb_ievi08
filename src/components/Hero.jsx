import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_0_25px_rgba(56,189,248,0.35)]">
          Track your money with clarity
        </h1>
        <p className="mt-4 text-lg md:text-xl text-blue-100/90">
          A modern personal finance dashboard with secure login, smart categories, and real-time summaries.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a href="#get-started" className="px-6 py-3 rounded-xl bg-cyan-500 text-white font-semibold shadow-lg shadow-cyan-500/30 hover:bg-cyan-400 transition">
            Get Started
          </a>
          <a href="/test" className="px-6 py-3 rounded-xl bg-white/10 text-white font-semibold border border-white/20 hover:bg-white/20 transition">
            Backend Test
          </a>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/50 to-slate-900" />
    </section>
  )
}
