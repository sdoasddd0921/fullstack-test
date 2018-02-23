/*
* 主路由
*/
const path = require('path');
const express = require('express');
const router = express.Router();

// API路由
const api = require('./api');

// 访问指定前缀的路由将定向至APP
router.get(['/', '/add(/*)?'], (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build/index.html'));
});

router.use('/api', api);

module.exports = router;
