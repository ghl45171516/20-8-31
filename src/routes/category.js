// 二级路由
const category = require('express').Router()
const bodyParser = require('body-parser')
category.use(bodyParser.urlencoded({ extended: false }));
console.log('----------')

// 增加文章
category.post('/', require('../controller/category/save.js'))
// 查询所有文章
category.get('/', require('../controller/category/find.js'))
// 查询单个文章
category.get('/:id', require('../controller/category/findById.js'))
// 改文章
category.put('/:id', require('../controller/category/update.js'))
// 删文章
category.delete('/:id', require('../controller/category/delete.js'))
module.exports = category