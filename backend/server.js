const fs = require('fs')
const express = require('express')

const server = express()

const port = 3001
server.listen(port, () => {
  console.log(`App running on port ${port}...`)
})
// const userData = JSON.parse(fs.readFileSync(`../public/data/user.json`))
// server.get('/api/user', (req, res) => {
//   res.status(200).json({
//     data: {
//       api: userData,
//     },
//   })
// })

// const userData = console.log(userData)

// console.log(userData)

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

// fs.readFile(`../public/data/user.json`, (err, data) => {

// })
