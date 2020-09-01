const User = require("../../model/User")

module.exports = async (req, res) => {
  // 获取id
  let str = req.path
  str = str.substr(1)
  console.log(str)
  // 数据库筛选条件删除
  let userObj = await User.findByIdAndDelete({_id:str})
  res.send(userObj)
}