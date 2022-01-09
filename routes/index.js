const router = require('express').Router()

router.use('/api', require('./itemRoutes.js'))
router.use('/api', require('./userRoutes.js'))
router.use('/api', require('./noteRoutes.js'))
router.use('/', require('./html.js'))

module.exports = router
