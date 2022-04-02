import type { RequestHandler } from '@sveltejs/kit'
import hertogJpg from '$lib/assets/hertog.jpg'

export const get: RequestHandler = async (e) => {
  const drinks = Array(10).fill(
    {
      name: 'Hertog Jan',
      description:
        'Hertog Jan is a Dutch-Belgian beer that is brewed with a special yeast strain that produces a fruity, tart taste.',
      image: hertogJpg,
    })

  return {
    status: 200,
    headers: {
      'content-type': 'application/json'
    },
    body: drinks
  }
}