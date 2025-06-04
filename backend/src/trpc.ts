import { initTRPC } from '@trpc/server'

const trpc = initTRPC.create()

const articles = [
  { nick: 'jose 1', name: 'mathc1', description: 'cheto 1...' },
  { nick: 'jose 2', name: 'mathc2', description: 'cheto 2...' },
  { nick: 'jose 3', name: 'mathc3', description: 'cheto 3...' },
]

export const trpcRouter = trpc.router({
  getReview: trpc.procedure.query(() => {
    return { articles }
  }),
})

export type TrpcRouter = typeof trpcRouter
