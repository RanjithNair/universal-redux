import { Router } from 'express'
const router = Router()

router.get('/sample', (req, res, next) => {
  res.json({
    name: 'RJ',
    dept: 'IT'
  })
})

export default router
