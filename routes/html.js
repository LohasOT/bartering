const router = require('express').Router()
const { join } = require('path')

router.get('/login', (req, res) => {
  res.sendFile(join(__dirname, '..', 'public', 'login.html'))
})

router.get('/home', (req, res) => {
  res.sendFile(join(__dirname, '..', 'public', 'index.html'))
})

router.get('/profile', (req, res) => {
  res.sendFile(join(__dirname, '..', 'public', 'itemPost.html'))
})

router.get('/register', (req, res) => {
  res.sendFile(join(__dirname, '..', 'public', 'register.html'))
})

router.get('/edit', (req, res) => {
  res.sendFile(join(__dirname, '..', 'public', 'editItem.html'))
})

router.get('/post', (req, res) => {
  res.sendFile(join(__dirname, '..', 'public', 'itemPage.html'))
})

// router.get('/post/:id', (req, res) => {
//   res.sendFile(join(__dirname, '..', 'public', 'itemPage.html'))
// })

module.exports = router