import { trpc } from '../../lib/trpc'

export const AllReviewPage = () => {
  const result = trpc.getReview.useQuery()
  if (result.isLoading) {
    return <span>Loading...</span>
  }

  if (result.isError) {
    return <span>Erorr, {result.error.message}</span>
  }

  return (
    <div>
      <h1>footbal review</h1>
      {result.data?.articles.map((element) => {
        return (
          <div key={element.name}>
            <h3>{element.nick}</h3>
            <h2>{element.name}</h2>
            <p>{element.description}</p>
          </div>
        )
      })}
    </div>
  )
}
