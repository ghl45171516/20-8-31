const User = require("../../model/User")

module.exports = async (req, res) => {
  // 获取id
  let str = req.path
  str = str.substr(1)
  console.log(str)

  // 数据库筛选条件
  let userObj = await User.find({_id:str},{password:0})

  res.send(userObj)
}