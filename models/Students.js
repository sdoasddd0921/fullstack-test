const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: [true, 'Name is required.']
  },
  sex: String,
  age: {
    type: Number,
    required: [true, 'Age is required.']
  },
  ID: {
    type: String,
    unique: true,
    required: [true, 'ID is required.']
  }
});

const Student = mongoose.model('student', StudentSchema);

module.exports = Student;
