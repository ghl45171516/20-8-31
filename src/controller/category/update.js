const User = require("../../model/Category.js")

module.exports = async (req, res) => {
  // 获取id
  let str = req.path
  str = str.substr(1)

  // 获取修改参数
  let body = await req.body
  console.log(body)

  // 数据库筛选条件更改
  let userObj = await User.findOneAndUpdate({_id:str},body,{'useFindAndModify':false,'new':true})
  res.send(userObj)
}