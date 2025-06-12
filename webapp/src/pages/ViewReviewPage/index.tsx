import { useParams } from 'react-router-dom'
import { trpc } from '../../lib/trpc'
import css from './index.module.scss'
import { Segment } from '../../components/Segment'

export const ViewReviewPage = () => {
  const { reviewNick } = useParams() as { reviewNick: string }

  const result = trpc.getReview.useQuery({
    reviewNick,
  })
  if (result.isLoading) {
    return <span>Loading...</span>
  }

  if (result.isError) {
    return <span>Erorr, {result.error.message}</span>
  }

  if (!result.data?.review) {
    return <span>Review not found</span>
  }
  return (
    <Segment title={result.data.review.name} description={result.data.review.description}>
      <div className={css.text} dangerouslySetInnerHTML={{ __html: result.data.review.text }} />
    </Segment>
  )
}

// export const ViewReviewPage = () => {
//   const { reviewNick } = useParams() as { reviewNick: string }
//   return (
//     <div>
//       <h1>{reviewNick}</h1>
//       <p>Description review 1...</p>
//       <div>
//         <p>1 match</p>
//         <p>2 match</p>
//         <p>3 match</p>
//       </div>
//     </div>
//   )
// }
