
import { Router } from 'express'

import page from './page'

const router = Router()

// Add Routes
router.use('/page', page)

export default router
