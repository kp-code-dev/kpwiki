import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'
import { revalidateFooter } from './hooks/revalidateFooter'

const footerLinkGroup = (name: string, label: string, maxRows: number) => ({
  name,
  label,
  type: 'array' as const,
  maxRows,
  fields: [
    link({
      appearances: false,
    }),
  ],
  admin: {
    initCollapsed: true,
    components: {
      RowLabel: '@/Footer/RowLabel#RowLabel',
    },
  },
})

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  fields: [
    footerLinkGroup('explore', 'EXPLORE', 10),
    footerLinkGroup('about', 'ABOUT', 10),
    footerLinkGroup('help', 'HELP', 10),
    footerLinkGroup('legal', 'LEGAL', 10),
  ],
  hooks: {
    afterChange: [revalidateFooter],
  },
}
