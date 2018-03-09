const express = require('express');
const Student = require('../models/Students');
const db = require('../models/db');
const router = express.Router();

router.get('/test', (req, res) => {
  console.log('get test request success!');
  res.send({type:'GET'});
});

router.post('/addStudent', (req, res) => {
  const data = req.body;
  console.log(data);
  // Student.create(data, function(err, backdata) {
  //   if (err) console.log(err);
  //   console.log('saved!', backdata);
  // });
  // 前端会调用json解析方法，不能直接返回字符串
  res.send(['OK']);
});

module.exports = router;
