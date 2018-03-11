const express = require('express');
const Student = require('../models/Students');
const db = require('../models/db');
const router = express.Router();

router.get('/test', (req, res) => {
  console.log('get test request success!');
  res.send({type:'GET'});
});

// 返回所有学生
router.get('/student', (req, res, next) => {
  Student.find({},(err,st)=>{
    console.log(st);
    res.send(st);
  });
  // res.send(['OK'])
});

// 根据_id返回单个学生
router.get('/student/:id', (req, res, next) => {
  Student.findById(req.params.id)
    .then((err, student) => {
        res.send(student);
    }).catch(next);
});

router.post('/addStudent', (req, res, next) => {
  const student = req.body;
  console.log(student);
  Student.create(student)
    .then((student) => {
      // 前端会调用json解析方法，不能直接返回字符串
      res.send({
        status: 'OK',
        savedData: student
      });
    }).catch(next);
});

module.exports = router;
