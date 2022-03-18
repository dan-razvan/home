const fs = require('fs')
const express = require('express')

const server = express()

const port = 3001
server.listen(port, () => {
  console.log(`App running on port ${port}...`)
})

server.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE')
  next()
})
server.get('/api/user', (req, res) => {
  fs.readFile(`../public/data/user.json`, (err, data) => {
    res.status(200).json({
      data: {
        api: JSON.parse(data),
      },
    })
  })
})
