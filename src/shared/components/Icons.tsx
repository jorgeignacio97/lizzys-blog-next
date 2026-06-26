'use client'

import { Leaf, ArrowRight, Scissors, Paintbrush, Hand, Truck, Mail } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface IconProps {
  name: string
  size?: number
  strokeWidth?: number
}

const iconMap: Record<string, LucideIcon> = {
  leaf: Leaf,
  arrow: ArrowRight,
  needle: Scissors,
  brush: Paintbrush,
  sewing: Scissors,
  hand: Hand,
  truck: Truck,
  mail: Mail,
}

const s = {
  fill: 'none' as const,
  stroke: 'currentColor' as const,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

function InstagramIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth={1.5} {...s}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  )
}

function WhatsAppIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth={1.5} {...s}>
      <path d="M20 12a8 8 0 11-3.6-6.7L20 4l-1.3 3.6A8 8 0 0120 12z" />
      <path d="M9 10c0 3 2 5 5 5l1.5-1.5L13 12l-2 .5-1.5-2L10 9z" strokeOpacity="0.7" />
    </svg>
  )
}

export function Icons({ name, size = 24, strokeWidth = 1.5 }: IconProps) {
  if (name === 'instagram') return <InstagramIcon size={size} />
  if (name === 'whatsapp') return <WhatsAppIcon size={size} />
  if (name === 'logo') return <Scissors size={size} strokeWidth={strokeWidth} />

  const Icon = iconMap[name]
  if (!Icon) return null
  return <Icon size={size} strokeWidth={strokeWidth} />
}
