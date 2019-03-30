// 引入模块
const Sequelize = require('sequelize');
// 读取配置
const Config = require('./config');


console.log('init sequelize...');

var sequelize = new Sequelize(Config.database, Config.username, Config.password, {
    host: Config.localhost,
    dialect: Config.dialect,
    pool: Config.pool
});

/* const ID_TYPE = Sequelize.STRING(50); */

function defineModel(name, attributes) {
    var attrs = {};
    for (let key in attributes) {
        let value = attributes[key];
        if (typeof value === 'object' && value['type']) {
            value.allowNull = value.allowNull || false;
            attrs[key] = value;
        } else {
            attrs[key] = {
                type: value,
                allowNull: false
            };
        }
    }
    /* attrs.id = {
        type: ID_TYPE,
        primaryKey: true
    }; */
    attrs.createdAt = {
        type: Sequelize.BIGINT,
        allowNull: false
    };
    attrs.updatedAt = {
        type: Sequelize.BIGINT,
        allowNull: false
    };
    attrs.version = {
        type: Sequelize.BIGINT,
        allowNull: false
    };
    return sequelize.define(name, attrs, {
        tableName: name,
        timestamps: false,
        hooks: {
            beforeValidate: function (obj) {
                let now = Date.now();
                if (obj.isNewRecord) {
                    /* if (!obj.id) {
                        obj.id = generateId();
                    } */
                    obj.createdAt = now;
                    obj.updatedAt = now;
                    obj.version = 0;
                } else {
                    obj.updatedAt = Date.now();
                    obj.version++;
                }
            }
        }
    });
};
exports.defineModel = defineModel;