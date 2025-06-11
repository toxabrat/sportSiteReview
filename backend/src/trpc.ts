import { initTRPC } from '@trpc/server'
import _ from 'lodash'
import { z } from 'zod'

const trpc = initTRPC.create()

const articles = _.times(10, (i) => ({
  nick: `jose-${i}`,
  name: `mathc${i}`,
  description: `cheto ${i}...`,
  text: _.times(10, (i) => `<p>tottenham in extra ${i} minutes win</p>`).join(''),
}))
// const articles = [
//   { nick: 'jose-1', name: 'mathc1', description: 'cheto 1...' },
//   { nick: 'jose-2', name: 'mathc2', description: 'cheto 2...' },
//   { nick: 'jose-3', name: 'mathc3', description: 'cheto 3...' },
// ]

export const trpcRouter = trpc.router({
  getReviews: trpc.procedure.query(() => {
    return { articles: articles.map((val) => _.pick(val, ['nick', 'name', 'description'])) }
  }),
  getReview: trpc.procedure
    .input(
      z.object({
        reviewNick: z.string(),
      })
    )
    .query(({ input }) => {
      const ans = articles.find((v) => v.nick == input.reviewNick)
      return { review: ans || null }
    }),
})

export type TrpcRouter = typeof trpcRouter
