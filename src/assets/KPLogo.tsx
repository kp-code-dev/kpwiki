import React from 'react'

type KPLogoProps = {
  className?: string
  width?: number | string
  height?: number | string
  priority?: boolean
}

/**
 * KP Gaming logo component.
 * Place KP_Gaming_Logo.svg in public/images/KP_Gaming_Logo.svg.
 */
export function KPLogo({
  className = '',
  width = 180,
  height = 'auto',
  priority = false,
}: KPLogoProps) {
  return (
    <img
      src="/images/KP_Gaming_Logo.svg"
      alt="KP Gaming Logo"
      width={width}
      height={height}
      className={className}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding="async"
      draggable={false}
    />
  )
}

export default KPLogo
