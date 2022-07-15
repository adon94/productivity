export default function Container({ sm, children }) {
  return <div className={`container mx-auto px-4 ${sm && 'max-w-screen-sm'}`}>{children}</div>
}
