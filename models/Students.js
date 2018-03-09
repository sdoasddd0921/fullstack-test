const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  sex: String,
  age: {
    type: Number,
    required: [true, 'Age is required']
  },
  ID: {
    type: String,
    required: [true, 'ID is required']
  }
});

const Student = mongoose.model('student', StudentSchema);

module.exports = Student;
