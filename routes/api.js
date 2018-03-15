const express = require('express');
const Student = require('../models/Students');
const db = require('../models/db');
const router = express.Router();

router.get('/test', (req, res) => {
  console.log('get test request success!');
  res.send({type:'GET'});
});

const hasStudent = (name, yes, no) => {
  Student.find({ name: name })
    .then((student) => {
      student.length > 0
        ? yes()
        : no();
    })
    .catch(err => res.send({ error: err.message }));
};

router.get('/name/:name', (req, res) => {
  hasStudent(req.params.name);
  res.send({test:'test'})
});

// 返回所有学生
router.get('/student', (req, res, next) => {
  Student.find((err,st)=>{
    // console.log(st); // 控制台打印获取到的数据
    res.send(st);
  });
});

// 根据_id返回单个学生
router.get('/student/:id', (req, res) => {
  Student.findById(req.params.id)
    .then((student) => {
      res.send({ hasStudent: true });
    }).catch(err => {
      console.log('can\'t find such student');
      res.send({ hasStudent: false });
    });
});

// 根据_id删除学生
router.delete('/student/:id', (req, res, next) => {
  console.log(req.params)
  Student.findByIdAndRemove(req.params.id)
    .then((student) => {
      res.send({ result: `Student ${student.name} delete success.` });
    })
    .catch(err => {
      console.log(err.message);
      res.send({ error: err.message });
    });
});

// 修改信息
router.put('/student/:id', (req, res,next) => {
  const stu = req.body;

  // 因为前端BUG可能导致没有id
  if (req.params.id === undefined) {
    return res.send({ error: 'Invalid Identity! Please try again.' });
  }

  Student.findByIdAndUpdate(req.params.id, stu)
    .then(function(student) {
      // 未查询到
      if (student === null) {
        return res.send({ error: 'Could not find such student.' });
      }
      res.send({ result: 'Update success.' });
    })
    .catch(next);
});

// 添加信息
router.post('/student', (req, res, next) => {
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

// 错误处理
const errorHandler = (err, req, res, next) => {
  console.log('Gloable error handler fired!');
  let errMessage = 'Error';
  const type = err.errmsg.match(/.*students\.\$(.*)_.*/)[1];
  console.log(err.errmsg)
  console.log(type)
  switch(err.code) {
    case 11000:
      errMessage = `This ${type} is already exist.`;
  }
  res.status(500).send({ error: errMessage });
}

router.use(errorHandler);

module.exports = router;
