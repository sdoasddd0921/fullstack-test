// 连接数据库
const mongoose = require('mongoose');

// local

const dbConnectString = 'mongodb://ZSQ:mongoZSQ@localhost/fullStackDemo';

// const dbConnectString = `mongodb://${dbUser}:${dbPass}@${dbAddress1}/${dbName}`;

const db = mongoose.connect(dbConnectString)
  .then(dt => console.log('database connect success~'))
  .catch(err => console.log('ERR!!!!!!!'));

module.exports = db;