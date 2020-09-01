const User = require("../../model/Category.js")

module.exports = async (req, res) => {
  // 获取id
  let str = req.path
  console.log(str)
  str = str.substr(1)

  // 数据库筛选条件
  let userObj = await User.find({_id:str},{password:0})

  res.send(userObj)
}