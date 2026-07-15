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
        background: '#131313',
        color: '#e5e2e1',
        fontFamily: 'var(--font-hanken), sans-serif',
        textAlign: 'center',
        padding: '2rem',
      }}
    >
      <div
        style={{
          fontSize: '7rem',
          fontWeight: 700,
          fontFamily: 'var(--font-playfair), serif',
          color: '#c8a27c',
          lineHeight: 1,
          marginBottom: '1.5rem',
        }}
      >
        404
      </div>
      <h1
        style={{
          fontSize: '1.5rem',
          fontWeight: 600,
          marginBottom: '0.75rem',
          color: '#e5e2e1',
        }}
      >
        Page Not Found
      </h1>
      <p style={{ color: '#d3c4b8', marginBottom: '2rem', maxWidth: 400, fontSize: '0.95rem', lineHeight: 1.5 }}>
        The page you are looking for does not exist or has been relocated.
      </p>
      <Link
        href="/"
        className="btn-primary"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          textDecoration: 'none',
        }}
      >
        ← Back to Portfolio
      </Link>
    </div>
  )
}
