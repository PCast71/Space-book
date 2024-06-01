const Sequelize = require('sequelize');
const config = require('../config/config.json')['development'];

const sequelize = new Sequelize(config.databases, config.username, config.password, config);

const db = {
    User: require('./user')(sequelize, Sequelize.DataTypes),
    Post: require('./post')(sequelize, Sequelize.DataTypes),
};

Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequlize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;