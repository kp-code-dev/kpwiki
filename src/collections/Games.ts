import type { CollectionConfig } from 'payload'

import { revalidateGame, revalidateDelete } from './Games/hooks/revalidateGame'

export const Games: CollectionConfig = {
  slug: 'games',

  hooks: {
    afterChange: [revalidateGame],
    afterDelete: [revalidateDelete],
  },

  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'releaseDate', 'updatedAt'],
    group: 'Gaming',
  },

  access: {
    read: () => true,
  },

  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Game Title',
    },
    {
      name: 'cloudinaryPublicId',
      type: 'text',
      label: 'Cloudinary Public ID',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      admin: {
        position: 'sidebar',
        description: 'URL-friendly game identifier',
      },
    },
    {
      name: 'coverImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Cover Image',
    },
    {
      name: 'shortDescription',
      type: 'textarea',
      label: 'Short Description',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Full Description',
    },
    {
      name: 'releaseDate',
      type: 'date',
      label: 'Release Date',
    },
    {
      name: 'developer',
      type: 'text',
      label: 'Developer',
    },
    {
      name: 'publisher',
      type: 'text',
      label: 'Publisher',
    },
    {
      name: 'platforms',
      type: 'select',
      hasMany: true,
      options: [
        { label: 'PC', value: 'pc' },
        { label: 'PlayStation 5', value: 'ps5' },
        { label: 'PlayStation 4', value: 'ps4' },
        { label: 'Xbox Series X/S', value: 'xbox-series' },
        { label: 'Xbox One', value: 'xbox-one' },
        { label: 'Nintendo Switch', value: 'switch' },
        { label: 'Android', value: 'android' },
        { label: 'iOS', value: 'ios' },
      ],
    },
    {
      name: 'genres',
      type: 'text',
      hasMany: true,
      label: 'Genres',
    },
    {
      name: 'rating',
      type: 'number',
      min: 0,
      max: 10,
      label: 'Rating (0–10)',
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      label: 'Featured Game',
    },
  ],
}
