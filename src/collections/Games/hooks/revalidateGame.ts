import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

import { revalidatePath } from 'next/cache'
import type { Game } from '../../../payload-types'

export const revalidateGame: CollectionAfterChangeHook<Game> = ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    payload.logger.info('Revalidating games pages')

    // Refresh games listing
    revalidatePath('/games')

    // Refresh current game detail page
    revalidatePath(`/games/${doc.slug}`)

    // Refresh previous slug if it changed
    if (previousDoc?.slug && previousDoc.slug !== doc.slug) {
      revalidatePath(`/games/${previousDoc.slug}`)
    }
  }

  return doc
}

export const revalidateDelete: CollectionAfterDeleteHook<Game> = ({
  doc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    payload.logger.info('Revalidating deleted game')

    revalidatePath('/games')

    if (doc?.slug) {
      revalidatePath(`/games/${doc.slug}`)
    }
  }

  return doc
}
