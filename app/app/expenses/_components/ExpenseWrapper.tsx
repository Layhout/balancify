import ExpenseCardPlaceholder from './ExpenseCardPlaceholder'

export function ExpenseWrapper({
  children,
  loading,
}: Readonly<{
  children?: React.ReactNode
  loading: boolean
}>) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {loading ? Array.from({ length: 3 }).map((_, i) => <ExpenseCardPlaceholder key={i} />) : children}
    </div>
  )
}
