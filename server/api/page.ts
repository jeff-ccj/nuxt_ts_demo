import express from 'express'

const router = express.Router()

//详情
router.get('/detail', function (req, res, next) {
  res.json({ data: {test: 666} })
})

export default router
