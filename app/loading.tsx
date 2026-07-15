export default function Loading() {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: '#131313',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        gap: '24px',
      }}
    >
      {/* Logo mark */}
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: 8,
          background: '#c8a27c',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 24px rgba(200,162,124,0.15)',
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="14" width="4" height="7" rx="1" fill="#131313" opacity="0.6" />
          <rect x="10" y="9" width="4" height="12" rx="1" fill="#131313" opacity="0.8" />
          <rect x="17" y="3" width="4" height="18" rx="1" fill="#131313" />
        </svg>
      </div>

      {/* Loader bar */}
      <div style={{ width: 180, height: 2, background: 'rgba(255,255,255,0.06)', borderRadius: 1, overflow: 'hidden' }}>
        <div className="loader-bar" style={{ height: '100%', background: 'var(--accent-gold)' }} />
      </div>

      <p
        style={{
          color: '#9b8e84',
          fontSize: '0.72rem',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          fontFamily: 'var(--font-jetbrains), monospace',
        }}
      >
        Loading Portfolio...
      </p>
    </div>
  )
}
