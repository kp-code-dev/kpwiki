import { CldImage } from 'next-cloudinary'
import { notFound } from 'next/navigation'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import Image from 'next/image'

type Props = {
  params: Promise<{
    slug: string
  }>
}

export default async function GameDetailsPage({ params }: Props) {
  const { slug } = await params

  const payload = await getPayload({
    config: configPromise,
  })

  const result = await payload.find({
    collection: 'games',
    where: {
      slug: {
        equals: slug,
      },
    },
    limit: 1,
  })

  const game = result.docs[0]

  if (!game) {
    notFound()
  }

  return (
    <main className="container min-h-screen py-12 text-white">
      <h1 className="text-4xl font-bold">{game.title}</h1>

      {game.cloudinaryPublicId && (
        <div className="relative mt-8 aspect-[3/4] max-w-xs overflow-hidden rounded-xl">
          <CldImage
            src={game.cloudinaryPublicId}
            alt={game.title}
            fill
            sizes="(max-width: 768px) 100vw, 320px"
            crop="fill"
            gravity="auto"
            className="object-cover"
          />
        </div>
      )}

      <p className="mt-6 text-gray-300">{game.shortDescription}</p>

      <p className="mt-4 leading-7 text-gray-400">{game.description}</p>

      <div className="mt-8 space-y-3 text-gray-300">
        <p>Developer: {game.developer}</p>
        <p>Publisher: {game.publisher}</p>
        <p>Rating: {game.rating}/10</p>
      </div>
    </main>
  )
}
