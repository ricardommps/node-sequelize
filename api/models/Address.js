const Sequelize = require('sequelize');
const sequelize = require('../../config/database');
const Student = require('./Student')
const tableName = 'address';


const Address = sequelize.define('address', {
    type: {
        type:Sequelize.STRING,
        allowNull: false
    },
    company:{
        type: Sequelize.STRING
    },
    phoneCompany:{
        type: Sequelize.STRING
    },
    street: {
        type: Sequelize.STRING,
        allowNull: false
    },
    number: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    complement: {
        type: Sequelize.STRING
    },
    zipcode: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    neighborhood: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    district: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    city: {
        type: Sequelize.STRING,
        allowNull: false,
    },
  },{ tableName });

/* const Address = sequelize.define('Address', {
    uuid: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true
    },
    type: {
        type:Sequelize.STRING,
        allowNull: false
    },
    street: {
        type: Sequelize.STRING,
        allowNull: false
    },
    number: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    complement: {
        type: Sequelize.STRING
    },
    zipcode: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    neighborhood: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    district: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    city: {
        type: Sequelize.STRING,
        allowNull: false,
    }
},{ tableName });
//Address.belongsTo(Student);
//Address.belongsTo(Student,{ foreignKey: 'fk_studentid', targetKey: 'id'});
//Address.hasOne(Student, { foreignKey: 'uuid'});
// eslint-disable-next-line


Address.prototype.toJSON = function () {
    const values = Object.assign({}, this.get());
    return values;
}; */


module.exports = Address; 