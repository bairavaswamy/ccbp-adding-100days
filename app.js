const express = require('express')

const app = express()

const addDays = require('date-fns/addDays')

app.listen(3000)

app.get('/', function (request, response) {
  const result = addDays(new Date(2023, 12, 21), 100)
  response.send(
    `${result.getDate()}/${result.getMonth()}/${result.getFullYear()}`
  )
})

module.exports = app
