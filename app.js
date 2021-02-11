const express = require('express')
const time = require('express-timestamp')
const moment = require('moment')
const app = express()
const port = 3000

app.locals.moment = moment

app.use(time.init)
app.use(function (req, res, next) {
  let moment = req.timestamp
  let startTime = Date.now()
  res.on('finish', () => {
    let finishTime = Date.now()
    let duration = finishTime - startTime
    let serverMessage = `${moment.format('YYYY-MM-DD HH:mm:ss')} | ${req.method} from ${req.originalUrl} | total time: ${duration}ms`
    console.log(serverMessage)
  })
  next()
})

app.get('/', (req, res) => {
  res.send('列出全部 Todo')
})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})

app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})