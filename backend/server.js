const fs = require('fs')
const express = require('express')

const server = express()

const port = 3001
server.listen(port, () => {
  console.log(`App running on port ${port}...`)
})

server.get('/api/user', (req, res) => {
  fs.readFile(`../public/data/user.json`, (err, data) => {
    if (err) {
      res.write(`Error: ${err}`)
    } else {
      res.status(200).json({
        data: {
          api: JSON.parse(data),
        },
      })
    }
  })
})
