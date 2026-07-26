import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Aum Patel — Frontend Developer Portfolio'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#0F172A',
          padding: '60px 70px',
          position: 'relative',
          overflow: 'hidden',
          fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        }}
      >
        {/* Glow background accents */}
        <div
          style={{
            position: 'absolute',
            top: '-150px',
            right: '-100px',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(37, 99, 235, 0.35) 0%, rgba(15, 23, 42, 0) 70%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-150px',
            left: '-100px',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(96, 165, 250, 0.25) 0%, rgba(15, 23, 42, 0) 70%)',
          }}
        />

        {/* Decorative Grid Line */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        {/* Header Badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', zIndex: 10 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: '#3B82F6',
              boxShadow: '0 0 12px #3B82F6',
            }}
          />
          <span
            style={{
              fontSize: '18px',
              fontWeight: 600,
              color: '#60A5FA',
              letterSpacing: '2px',
              textTransform: 'uppercase',
            }}
          >
            PORTFOLIO & DEVELOPER SHOWCASE
          </span>
        </div>

        {/* Main Content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', zIndex: 10 }}>
          <h1
            style={{
              fontSize: '64px',
              fontWeight: 800,
              color: '#F8FAFC',
              margin: 0,
              lineHeight: 1.1,
              letterSpacing: '-1px',
            }}
          >
            Aum Patel
          </h1>
          <p
            style={{
              fontSize: '32px',
              fontWeight: 500,
              color: '#94A3B8',
              margin: 0,
              lineHeight: 1.3,
            }}
          >
            Frontend Developer — Building High-Performance Web Applications
          </p>
        </div>

        {/* Footer / Tech Tags */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            zIndex: 10,
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            paddingTop: '24px',
          }}
        >
          <div style={{ display: 'flex', gap: '12px' }}>
            {['TypeScript', 'React', 'Next.js', 'TailwindCSS', 'Framer Motion'].map((tech) => (
              <div
                key={tech}
                style={{
                  padding: '8px 16px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(30, 41, 59, 0.8)',
                  border: '1px solid rgba(148, 163, 184, 0.2)',
                  color: '#E2E8F0',
                  fontSize: '16px',
                  fontWeight: 500,
                }}
              >
                {tech}
              </div>
            ))}
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 20px',
              borderRadius: '8px',
              backgroundColor: '#2563EB',
              color: '#FFFFFF',
              fontSize: '16px',
              fontWeight: 600,
            }}
          >
            View Portfolio ✨
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
