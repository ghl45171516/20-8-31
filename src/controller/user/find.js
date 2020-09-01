const User = require("../../model/User")

module.exports = async (req, res) => {
  let userObj = await User.find({},{password:0})
  res.send(userObj)
}