'use client'
import { useEffect, useRef, useState } from 'react'

export default function AnimatedCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    if (isMobile) return

    setIsVisible(true)
    let mouseX = 0, mouseY = 0
    let ringX = 0, ringY = 0
    let animId: number

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (dotRef.current) {
        dotRef.current.style.left = `${mouseX}px`
        dotRef.current.style.top = `${mouseY}px`
      }
    }

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12
      if (ringRef.current) {
        ringRef.current.style.left = `${ringX}px`
        ringRef.current.style.top = `${ringY}px`
      }
      animId = requestAnimationFrame(animate)
    }

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isInteractive = target.closest('a, button, input, textarea, [data-cursor="pointer"]')
      if (ringRef.current && dotRef.current) {
        if (isInteractive) {
          ringRef.current.style.width = '48px'
          ringRef.current.style.height = '48px'
          ringRef.current.style.borderColor = 'var(--accent-gold)'
          dotRef.current.style.width = '8px'
          dotRef.current.style.height = '8px'
          dotRef.current.style.background = 'var(--accent-gold-light)'
        } else {
          ringRef.current.style.width = '32px'
          ringRef.current.style.height = '32px'
          ringRef.current.style.borderColor = 'rgba(200, 162, 124, 0.3)'
          dotRef.current.style.width = '6px'
          dotRef.current.style.height = '6px'
          dotRef.current.style.background = 'var(--accent-gold)'
        }
      }
    }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseover', onMouseOver)
    animId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseover', onMouseOver)
      cancelAnimationFrame(animId)
    }
  }, [])

  if (!isVisible) return null

  return (
    <>
      <div
        ref={dotRef}
        className="cursor-dot"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
      <div
        ref={ringRef}
        className="cursor-ring"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
    </>
  )
}
