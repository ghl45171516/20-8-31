const md5 = require('MD5')
const User = require('../../model/User.js')

module.exports = async (req, res) => {
  let body = await req.body
  let bool = await User.findOne({ username: body.username })
  if (bool) {
    return res.status(404).send('失败')
  }
  body.password = md5(body.password)
  let newUser = new User(body)
  newUser.save()
  res.send('bbbbb')
}