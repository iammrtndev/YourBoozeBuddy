import type { RequestHandler } from '@sveltejs/kit'

export const get: RequestHandler = async (e) => {
  const drinks = [
    {
      id: 0,
      name: 'Hertog Jan',
      description:
        'Hertog Jan is a Dutch-Belgian beer that is brewed with a special yeast strain that produces a fruity, tart taste.',
      image: '/hertog.jpg',
    },
    {
      id: 1,
      name: 'Hertog Jan',
      description:
        'Hertog Jan is a Dutch-Belgian beer that is brewed with a special yeast strain that produces a fruity, tart taste.',
      image: '/hertog.jpg',
    },
    {
      id: 2,
      name: 'Hertog Jan',
      description:
        'Hertog Jan is a Dutch-Belgian beer that is brewed with a special yeast strain that produces a fruity, tart taste.',
      image: '/hertog.jpg',
    },
    {
      id: 3,
      name: 'Hertog Jan',
      description:
        'Hertog Jan is a Dutch-Belgian beer that is brewed with a special yeast strain that produces a fruity, tart taste.',
      image: '/hertog.jpg',
    },
    {
      id: 4,
      name: 'Hertog Jan',
      description:
        'Hertog Jan is a Dutch-Belgian beer that is brewed with a special yeast strain that produces a fruity, tart taste.',
      image: '/hertog.jpg',
    },
    {
      id: 5,
      name: 'Hertog Jan',
      description:
        'Hertog Jan is a Dutch-Belgian beer that is brewed with a special yeast strain that produces a fruity, tart taste.',
      image: '/hertog.jpg',
    },
    {
      id: 6,
      name: 'Captain Morgan',
      description: 'Captain Morgan is a strong, dark, and highly carbonated beer.',
      image: '/hertog.jpg',
    },
    {
      id: 7,
      name: 'Captain Morgan',
      description: 'Captain Morgan is a strong, dark, and highly carbonated beer.',
      image: '/hertog.jpg',
    },
    {
      id: 8,
      name: 'Captain Morgan',
      description: 'Captain Morgan is a strong, dark, and highly carbonated beer.',
      image: '/hertog.jpg',
    },
    {
      id: 9,
      name: 'Captain Morgan',
      description: 'Captain Morgan is a strong, dark, and highly carbonated beer.',
      image: '/hertog.jpg',
    },
  ]

  return {
    status: 200,
    headers: {
      'content-type': 'application/json'
    },
    body: drinks
  }
}