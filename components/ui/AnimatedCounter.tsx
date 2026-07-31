'use client'
import { useEffect, useRef, useState } from 'react'
import { animate, useInView } from 'framer-motion'

interface AnimatedCounterProps {
  value: number
  suffix?: string
  duration?: number
  decimals?: number
}

export default function AnimatedCounter({ value, suffix = '', duration = 1.5, decimals = 0 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: duration,
        ease: 'easeOut',
        onUpdate: (latest) => {
          setCount(Number(latest.toFixed(decimals)))
        }
      })
      return () => controls.stop()
    }
  }, [isInView, value, duration, decimals])

  return (
    <span ref={ref} className="tabular-nums inline-block">
      {decimals > 0 ? count.toFixed(decimals) : count}
      {suffix}
    </span>
  )
}
