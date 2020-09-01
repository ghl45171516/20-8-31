const mongoose = require('./db.js')
const getSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  nickname: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: 'normal',
    required: true,
    enum: ['admin', 'normal']
  },
  createtime: {
    type: Date,
    default: Date.now
  },
  status: {
    type: Number,
    required: true,
    default: 1
  },
  avatar: {
    type: String,
    default: null
  }
})
const User = mongoose.model('User', getSchema, 'users')
module.exports = User