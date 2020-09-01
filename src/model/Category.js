const mongoose = require('./db.js')
const categorySchema = new mongoose.Schema({
 title:{
   type:String
 },
 content:{
  type:String
 }
})
const Category = mongoose.model('Category', categorySchema, 'categorys')
module.exports = Category