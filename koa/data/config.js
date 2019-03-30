var config = {
    dialect: 'mysql',
    database: 'test',
    username: 'root',
    password: 'lao20056780',
    host: 'localhost',
    port: 3306,
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
};

module.exports = config;