const User = require("../../model/Category.js")

module.exports = async (req, res) => {
  // 获取id
  let str = req.path
  str = str.substr(1)
  // 数据库筛选条件删除
  let userObj = await User.findByIdAndDelete({_id:str})
  res.send(userObj)
}