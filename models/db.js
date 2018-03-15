// 连接数据库
const mongoose = require('mongoose');

// Aliyun
// const dbAddress1 = 'dds-bp1e4e5b9d0fb5241578-pub.mongodb.rds.aliyuncs.com:3717';
// const dbAddress2 = 'dds-bp1e4e5b9d0fb5242256-pub.mongodb.rds.aliyuncs.com:3717';
// const dbName = 'mydata';
// const dbUser = 'mgdb';
// const dbPass = 'db123123';
// const dbCopy = 'mgset-5292433';

// mlab
const dbAddress1 = 'ds237748.mlab.com:37748';
// const dbAddress2 = 'dds-bp1e4e5b9d0fb5242256-pub.mongodb.rds.aliyuncs.com:3717';
const dbName = 'mdb';
const dbUser = 'fst';
const dbPass = 'testsdo0921';
// const dbCopy = 'mgset-5292433';

const dbConnectString = `mongodb://${dbUser}:${dbPass}@${dbAddress1}/${dbName}`;

const db = mongoose.connect(dbConnectString)
  .then(dt => console.log('database connect success~'))
  .catch(err => console.log('ERR!!!!!!!'));

module.exports = db;