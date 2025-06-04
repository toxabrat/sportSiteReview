import { TrpcProvider } from './lib/trpc'
import { AllReviewPage } from './pages/allReviewPage'

export const App = () => {
  return (
    <TrpcProvider>
      <AllReviewPage />
    </TrpcProvider>
  )
}
