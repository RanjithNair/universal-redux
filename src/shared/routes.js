import Home from './Home'
import Grid from './Grid'
import Sample from './Sample'
import { fetchPopularRepos } from './api'

const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/sample',
    exact: true,
    component: Sample
  },
  {
    path: '/popular/:id',
    component: Grid,
    fetchInitialData: (path = '') => fetchPopularRepos(path.split('/').pop())
  }
]

export default routes
