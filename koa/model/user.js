const db = require('../data/db');
var seq = require('sequelize');

var Model = db.defineModel('user', {
    name: seq.STRING(100),
    password: seq.STRING(100),
});
console.log('登入');
//导出模型对象
module.exports = Model;
