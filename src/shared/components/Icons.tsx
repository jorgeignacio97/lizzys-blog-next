'use client'

import {
  LeafIcon,
  ArrowRightIcon,
  NeedleIcon,
  PaintBrushIcon,
  ScissorsIcon,
  HandIcon,
  TruckIcon,
  InstagramLogoIcon,
  WhatsappLogoIcon,
  EnvelopeIcon,
} from '@phosphor-icons/react'
import type { IconWeight } from '@phosphor-icons/react'

interface IconProps {
  name: string
  size?: number
  weight?: IconWeight
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const iconMap: Record<string, any> = {
  leaf: LeafIcon,
  arrow: ArrowRightIcon,
  needle: NeedleIcon,
  brush: PaintBrushIcon,
  sewing: ScissorsIcon,
  hand: HandIcon,
  truck: TruckIcon,
  instagram: InstagramLogoIcon,
  whatsapp: WhatsappLogoIcon,
  mail: EnvelopeIcon,
  logo: NeedleIcon,
}

export function Icons({ name, size = 24, weight = 'light' }: IconProps) {
  const Icon = iconMap[name]
  if (!Icon) return null
  return <Icon size={size} weight={weight} />
}
