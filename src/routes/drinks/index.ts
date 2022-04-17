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
      name: 'Heineken',
      description:
        'Heineken is a Dutch beer that is being sold worldwide and is also known worldwide, according to the Dutch Heineken is mediocre.',
      image: '/hertog.jpg',
    },
    {
      id: 2,
      name: 'Amstel',
      description:
        'Amstel is a Dutch beer brand that is now owned by Heineken but the Amstel beer is the most liked beer next to Hertog Jan.',
      image: '/hertog.jpg',
    },
    {
      id: 3,
      name: 'Jägermeister',
      description:
        'Jägermeister is a German vodka and is worldwide known for the creative shots such as Jägerbombs.',
      image: '/hertog.jpg',
    },
    {
      id: 4,
      name: 'Dropshot',
      description:
        'Dropshot is a Dutch liquor and has a flavour of the Dutch drop. Some people like it, some do not.',
      image: '/hertog.jpg',
    },
    {
      id: 5,
      name: 'Trojka pink',
      description:
        'This is a Polish liquor and is most likely used for good flavour or warming up',
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
