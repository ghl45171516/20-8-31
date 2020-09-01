// 转用户二级路由
module.exports = app=>{
  // 转用户
  app.use('/users', require('./user.js'))
  
  // 转文章
  app.use('/category', require('./category.js'))
}

