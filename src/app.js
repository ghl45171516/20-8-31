const express = require('express')
const app = express()
// 转用户一级路由

require('./routes/index.js')(app)


app.listen(3000)
console.log('服务器连接成功 访问：http://localhost:3000')
