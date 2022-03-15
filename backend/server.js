const fs = require('fs')
const express = require('express')

const server = express()
const userData = JSON.parse(fs.readFileSync(`../public/data/user.json`))
server.get('/api/user', (req, res) => {
  res.status(200).json({
    data: {
      api: userData,
    },
  })
})
const port = 3001
server.listen(port, () => {
  console.log(`App running on port ${port}...`)
})
