const User = require("../../model/Category.js")

module.exports = async (req, res) => {
  let body = await req.body
  let bool = await User.findOne({ title: body.title })
  if (bool) {
    return res.status(404).send('失败')
  }
  let newUser = new User(body)
  newUser.save()
  res.send('增加成功')
}