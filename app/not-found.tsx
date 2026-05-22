import Link from 'next/link'

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#030712',
        color: '#F0F6FC',
        fontFamily: 'var(--font-outfit), sans-serif',
        textAlign: 'center',
        padding: '2rem',
      }}
    >
      <div
        style={{
          fontSize: '8rem',
          fontWeight: 800,
          background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          lineHeight: 1,
          marginBottom: '1rem',
        }}
      >
        404
      </div>
      <h1
        style={{
          fontSize: '1.5rem',
          fontWeight: 600,
          marginBottom: '0.75rem',
          color: '#F0F6FC',
        }}
      >
        Page not found
      </h1>
      <p style={{ color: '#8B949E', marginBottom: '2rem', maxWidth: 400 }}>
        The page you&apos;re looking for doesn&apos;t exist. Head back to the portfolio.
      </p>
      <Link
        href="/"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          padding: '12px 24px',
          background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)',
          color: 'white',
          borderRadius: 12,
          fontWeight: 600,
          textDecoration: 'none',
          fontSize: '0.9rem',
        }}
      >
        ← Back to Portfolio
      </Link>
    </div>
  )
}
