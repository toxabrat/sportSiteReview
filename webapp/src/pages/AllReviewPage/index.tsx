import { Link } from 'react-router-dom'
import { getViewReviewRoute } from '../../lib/routes'
import { trpc } from '../../lib/trpc'
import css from './index.module.scss'

export const AllReviewPage = () => {
  const result = trpc.getReviews.useQuery()
  if (result.isLoading) {
    return <span>Loading...</span>
  }

  if (result.isError) {
    return <span>Erorr, {result.error.message}</span>
  }

  return (
    <div>
      <h1 className={css.title}>footbal review</h1>
      <div className={css.ideas}>
        {result.data?.articles.map((element) => {
          return (
            <div className={css.idea} key={element.name}>
              <h3 className={css.ideaName}>
                <Link className={css.ideaLink} to={getViewReviewRoute({ reviewNick: element.nick })}>
                  {element.nick}
                </Link>
              </h3>
              <h2 className={css.ideaName}>{element.name}</h2>
              <p className={css.ideaDescription}>{element.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
