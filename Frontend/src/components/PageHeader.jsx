function PageHeader({ eyebrow, title, description }) {
  return (
    <div>
      <p className="text-sm font-medium uppercase tracking-[0.35em] text-cyan-300/70">{eyebrow}</p>
      <h2 className="mt-3 text-4xl font-semibold tracking-tight text-white">{title}</h2>
      <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">{description}</p>
    </div>
  )
}

export default PageHeader
