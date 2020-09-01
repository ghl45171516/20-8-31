const User = require("../../model/Category.js")

module.exports = async (req, res) => {
  let userObj = await User.find({},{password:0})
  res.send(userObj)
}