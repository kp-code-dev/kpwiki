'use client'

import React from 'react'
import type { Header as HeaderType } from '@/payload-types'
import { CMSLink } from '@/components/Link'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []
  const pathname = usePathname()

  return (
    <nav className="flex items-center gap-8">
      {navItems.map(({ link }, i) => {
        const href =
          link.type === 'reference' &&
          typeof link.reference?.value === 'object' &&
          link.reference.value.slug
            ? `${link.reference.relationTo !== 'pages' ? `/${link.reference.relationTo}` : ''}/${link.reference.value.slug}`
            : link.url

        const isActive = href === pathname

        return (
          <div key={i} className="relative">
            <CMSLink
              {...link}
              appearance="link"
              className={`!h-auto !bg-transparent !px-0 !py-0 !text-sm !font-semibold !text-white !no-underline transition-colors hover:!text-red-500 ${
                isActive ? '!text-red-500' : ''
              }`}
            />
            {isActive && (
              <span className="absolute -bottom-[7px] left-0 h-[2px] w-full bg-red-500" />
            )}
          </div>
        )
      })}
    </nav>
  )
}
