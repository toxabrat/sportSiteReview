import { Link } from 'react-router-dom'
import { getViewReviewRoute } from '../../lib/routes'
import { trpc } from '../../lib/trpc'
import css from './index.module.scss'
import { Segment } from '../../components/Segment'

export const AllReviewPage = () => {
  const result = trpc.getReviews.useQuery()
  if (result.isLoading) {
    return <span>Loading...</span>
  }

  if (result.isError) {
    return <span>Erorr, {result.error.message}</span>
  }

  return (
    <Segment title="footbal review">
      <div className={css.ideas}>
        {result.data?.articles.map((element) => {
          return (
            <div className={css.idea} key={element.name}>
              <Segment
                size={2}
                title={
                  <Link className={css.ideaLink} to={getViewReviewRoute({ reviewNick: element.nick })}>
                    {element.description}
                  </Link>
                }
                description={element.description}
              />
            </div>
          )
        })}
      </div>
    </Segment>
  )
}
