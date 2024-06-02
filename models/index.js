const Sequelize = require('sequelize');
const config = require('../config/config.json')['development'];

const sequelize = new Sequelize(config.databases, config.username, config.password, config);

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

    db.User = require('./user')(sequelize, Sequelize.DataTypes);
    db.Post = require('./post')(sequelize, Sequelize.DataTypes);
    db.Comment = require('./comment')(sequelize, Sequelize.DataTypes);


Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

module.exports = db;