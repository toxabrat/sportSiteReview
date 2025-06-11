import { Link, Outlet } from 'react-router-dom'
import { getAllReviewRoute, newReviewPageRoute } from '../../lib/routes'
import css from './index.module.scss'

export const Layout = () => {
  return (
    <div className={css.layout}>
      <div className={css.navigation}>
        <div className={css.logo}>IdeaNick</div>
        <ul className={css.menu}>
          <li className={css.item}>
            <Link className={css.link} to={getAllReviewRoute()}>
              All Review
            </Link>
          </li>
          <li className={css.item}>
            <Link className={css.link} to={newReviewPageRoute()}>
              New review
            </Link>
          </li>
        </ul>
      </div>
      <div className={css.content}>
        <Outlet />
      </div>
    </div>
  )
}
