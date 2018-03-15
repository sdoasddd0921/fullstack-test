var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
const router = require('./routes/router');

// 添加静态文件路由
app.use(express.static(path.join(__dirname, 'client/build')));

// 添加路由
app.use(router);

// 添加信息的API
app.post('/api-addInfo', (req, res) => {
  console.log('get a post request.');
  res.json({"test": "success"});
});

var server = app.listen(process.env.port || 3000, function() {
  console.log('listen at port: ', process.env.port || 3000);
});