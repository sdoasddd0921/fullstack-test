const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CatSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  sex: String,
  age: Number
});

const Cat = mongoose.model('cat', CatSchema);

module.exports = Cat;
