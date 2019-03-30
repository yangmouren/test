var config = {
    dbname: 'testdb',       //数据库名称
    uname: 'root',          //数据库账号
    upwd: 'lao20056780',           //数据库密码
    host: 'localhost',      //数据库服务器地址
    port: 3306,             //数据库服务器端口
    dialect: 'mysql',       //数据库类型
    pool: {                 //数据库连接池
        max: 5,             //数据库最大连接数
        min: 0,             //数据库最小连接数
        idle: 10000         //数据库连接等待时间10s
    }
};

module.exports = config;