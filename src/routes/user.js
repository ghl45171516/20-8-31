// 二级路由
const users = require('express').Router()
const bodyParser = require('body-parser')
users.use(bodyParser.urlencoded({ extended: false }));
console.log('----------')

// 增加用户
users.post('/', require('../controller/user/save.js'))
// 查询所有用户
users.get('/', require('../controller/user/find.js'))
// 查询单个用户
users.get('/:id', require('../controller/user/findById.js'))
// 改
users.put('/:id', require('../controller/user/update.js'))
// 删
users.delete('/:id', require('../controller/user/delete.js'))
module.exports = users
