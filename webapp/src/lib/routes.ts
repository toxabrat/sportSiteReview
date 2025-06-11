const getRouteParams = <T extends Record<string, boolean>>(object: T) => {
  return Object.keys(object).reduce((acc, key) => ({ ...acc, [key]: `:${key}` }), {}) as Record<keyof T, string>
}

export const getAllReviewRoute = () => '/'

export const viewReviewRouteParams = getRouteParams({ reviewNick: true })
export type ViewRouteParams = typeof viewReviewRouteParams
export const getViewReviewRoute = ({ reviewNick }: { reviewNick: string }) => `/reviews/${reviewNick}`

export const newReviewPageRoute = () => '/reviews/new'
