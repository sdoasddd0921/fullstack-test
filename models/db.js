// 连接数据库
const mongoose = require('mongoose');

const dbAddress1 = 'dds-bp1e4e5b9d0fb5241578-pub.mongodb.rds.aliyuncs.com:3717';
const dbAddress2 = 'dds-bp1e4e5b9d0fb5242256-pub.mongodb.rds.aliyuncs.com:3717';
const dbName = 'mydata';
const dbUser = 'mgdb';
const dbPass = 'db123123';
const dbCopy = 'mgset-5292433';

const dbConnectString = `mongodb://${dbUser}:${dbPass}@${dbAddress1},${dbAddress2}/${dbName}?replicaSet=${dbCopy}`;

const db = mongoose.connect(dbConnectString)
  .then(dt => console.log('database connect success~'))
  .catch(err => console.log('ERR!!!!!!!'));

module.exports = db;