export function MyTailwindButton({
  className,
  children,
}: {
  className: string
  children: React.ReactNode
}) {
  return (
    <button
      type='button'
      className={`bg-black text-white shadow-sm hover:bg-primary/90 ${className}`}
    >
      {children}
    </button>
  )
}
