/*
* 主路由
*/
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
// API路由
const api = require('./api');

const router = express.Router();

// 访问指定前缀的路由将定向至APP
router.get(['/', '/add(/*)?'], (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build/index.html'));
});

router.use('/api', bodyParser.json(), api);

module.exports = router;
