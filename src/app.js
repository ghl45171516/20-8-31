const express = require('express')
const app = express()
const users = require('./routes/user.js')

// 增加
app.use('/users', users)








app.listen(3000)
console.log('服务器连接成功 访问：http://localhost:3000')
