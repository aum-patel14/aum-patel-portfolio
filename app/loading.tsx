export default function Loading() {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: '#030712',
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
          borderRadius: 14,
          background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 0 30px rgba(59,130,246,0.5)',
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="14" width="4" height="7" rx="1" fill="white" opacity="0.6" />
          <rect x="10" y="9" width="4" height="12" rx="1" fill="white" opacity="0.8" />
          <rect x="17" y="3" width="4" height="18" rx="1" fill="white" />
        </svg>
      </div>

      {/* Loader bar */}
      <div style={{ width: 200, height: 2, background: 'rgba(255,255,255,0.06)', borderRadius: 1, overflow: 'hidden' }}>
        <div className="loader-bar" style={{ height: '100%' }} />
      </div>

      <p
        style={{
          color: '#484F58',
          fontSize: '0.75rem',
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
