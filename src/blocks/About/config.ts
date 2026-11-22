import type { Block } from 'payload'

import { link } from '@/fields/link'

export const About: Block = {
  slug: 'about',
  interfaceName: 'AboutBlock',
  labels: {
    singular: 'About Page',
    plural: 'About Pages',
  },
  fields: [
    {
      name: 'hero',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          defaultValue: 'About KP Wiki',
        },
        {
          name: 'description',
          type: 'textarea',
        },
        {
          name: 'backgroundImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Hero Background Image',
        },
        {
          name: 'buttonText',
          type: 'text',
          defaultValue: 'Explore Games',
        },
        link({
          overrides: {
            name: 'buttonLink',
            label: 'Button Link',
          },
        }),
      ],
    },
    {
      name: 'mission',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          defaultValue: 'Our Mission',
        },
        {
          name: 'description',
          type: 'textarea',
        },
        {
          name: 'features',
          type: 'array',
          minRows: 1,
          fields: [
            {
              name: 'icon',
              type: 'text',
              admin: {
                description: 'Lucide icon name, e.g. gamepad-2, shield-check',
              },
            },
            {
              name: 'title',
              type: 'text',
              required: true,
            },
            {
              name: 'description',
              type: 'textarea',
            },
          ],
        },
      ],
    },
    {
      name: 'stats',
      type: 'array',
      admin: {
        description: 'Optional. Add only verified statistics.',
      },
      fields: [
        {
          name: 'value',
          type: 'text',
        },
        {
          name: 'label',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'whyChooseUs',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          defaultValue: 'Why KP Wiki?',
        },
        {
          name: 'description',
          type: 'textarea',
        },
        {
          name: 'points',
          type: 'array',
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
            },
            {
              name: 'description',
              type: 'textarea',
            },
          ],
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
    {
      name: 'closing',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          defaultValue: 'Stay Connected',
        },
        {
          name: 'description',
          type: 'textarea',
        },
      ],
    },
  ],
}
