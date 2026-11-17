import { getPayload } from 'payload'
import configPromise from '@payload-config'
import GamesPageClient from '@/components/Games/GamesPageClient'

export default async function GamesPage() {
  const payload = await getPayload({
    config: configPromise,
  })

  const { docs: games } = await payload.find({
    collection: 'games',
    limit: 50,
    sort: '-createdAt',
    depth: 1,
  })

  return <GamesPageClient games={games} />
}
