function PageHeader({ eyebrow, title, description, theme }) {
  const isLight = theme === 'light'

  return (
    <div>
      <p className={isLight ? 'text-sm font-medium uppercase tracking-[0.35em] text-gray-400' : 'text-sm font-medium uppercase tracking-[0.35em] text-gray-500'}>
        {eyebrow}
      </p>
      <h2 className={isLight ? 'mt-3 text-4xl font-semibold tracking-tight text-gray-900' : 'mt-3 text-4xl font-semibold tracking-tight text-white'}>
        {title}
      </h2>
      <p className={isLight ? 'mt-4 max-w-2xl text-base leading-7 text-gray-600' : 'mt-4 max-w-2xl text-base leading-7 text-gray-400'}>
        {description}
      </p>
    </div>
  )
}

export default PageHeader
