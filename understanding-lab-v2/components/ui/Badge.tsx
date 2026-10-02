export default function Badge({ type, children }: { type: 'working'|'planned'|'preprint'|'frozen'|'failed'; children: React.ReactNode }) {
  return <span className={`badge badge-${type}`}>{children}</span>
}
