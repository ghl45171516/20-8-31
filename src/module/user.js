const express = require('express')
const User = require('../model/template.js')
const bodyParser = require('body-parser')
const md5 = require('MD5')
const users = express()

users.use(bodyParser.urlencoded({ extended: false }));

users.post('/', async (req, res) => {
  let body = await req.body
  let bool = await User.findOne({ username: body.username })
  console.log(bool)
  if (bool) {
    return res.status(404).send('失败')
  }
  console.log(body.password)
  body.password = md5(body.password)
  let newUser = new User(body)
  newUser.save()
  console.log(body.password)
  res.send('bbbbb')
})


module.exports = users
