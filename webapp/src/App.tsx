import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { getAllReviewRoute, getViewReviewRoute, newReviewPageRoute } from './lib/routes'
import { viewReviewRouteParams } from './lib/routes'
import { TrpcProvider } from './lib/trpc'
import { AllReviewPage } from './pages/AllReviewPage'
import './styles/global.scss'
import { NewReviewPage } from './pages/NewReviewPage'
import { ViewReviewPage } from './pages/ViewReviewPage'

export const App = () => {
  return (
    <TrpcProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path={getAllReviewRoute()} element={<AllReviewPage />} />
            <Route path={newReviewPageRoute()} element={<NewReviewPage />} />
            <Route path={getViewReviewRoute(viewReviewRouteParams)} element={<ViewReviewPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TrpcProvider>
  )
}
