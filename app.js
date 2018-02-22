var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const isLocal = process.env.isLocal !== undefined;
const dbPort = 3717;
const dbOut1 = 'dds-bp1e4e5b9d0fb5241578-pub.mongodb.rds.aliyuncs.com';
const dbOut2 = 'dds-bp1e4e5b9d0fb5242256-pub.mongodb.rds.aliyuncs.com';
const dbIn1 = 'dds-bp1e4e5b9d0fb5241.mongodb.rds.aliyuncs.com';
const dbIn2 = 'dds-bp1e4e5b9d0fb5242.mongodb.rds.aliyuncs.com';
const dbUser = 'mgdb';
const dbPass = 'db123123';
const dbCopy = 'mgset-5292433';
const database = 'mydata';

const dbConnectString = `mongodb://${dbUser}:${dbPass}@${isLocal?dbOut1:dbIn1}:${dbPort},${isLocal?dbOut2:dbIn2}:${dbPort}/${database}?replicaSet=${dbCopy}`;

console.log(dbConnectString);
//mongodb://mgdb:db123123@dds-bp1e4e5b9d0fb5241578-pub.mongodb.rds.aliyuncs.com:3717,dds-bp1e4e5b9d0fb5242256-pub.mongodb.rds.aliyuncs.com:3717/mydata?replicaSet=mgset-5292433
//mongodb://root:z123123123@dds-bp1e4e5b9d0fb5241.mongodb.rds.aliyuncs.com:3717/admin
mongoose.connect('mongodb://root:z123123123@dds-bp1e4e5b9d0fb5241.mongodb.rds.aliyuncs.com:3717/admin')
  .then(
    (data) => console.log('success: '),
    err => console.log('err: ', err)
  );
console.log('isLocal: ', isLocal);












app.use(express.static(path.join(__dirname, 'client/build')));
app.use(bodyParser.json());

app.get('/test', (req, res) => {
  res.json({type: 'GET'});
});
app.post('/test', (req, res) => {
  console.log(req.body);
  res.json({type: 'POST'});
});
app.put('/test', (req, res) => {
  res.json({type: 'PUT'});
});
app.delete('/test', (req, res) => {
  res.json({type: 'DELETE'});
});

//------------------------------------

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

// app.get('/add', (req, res) => {
//   res.sendFile(path.join(__dirname, 'client/build/index.html'));
// });

// app.get('/add', (req, res) => {
//   console.log(req.body);
//   // res.sendFile(path.join(__dirname, 'client/build/index.html'));
//   res.json({'test':'test'});
// });

// 添加信息的API
app.post('/api-addInfo', (req, res) => {
  console.log(req.body);
  res.json({"test": "success"});
});

var server = app.listen(process.env.port || 3000, function() {
  console.log('listen at port: ', process.env.port || 3000);
});