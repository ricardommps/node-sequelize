const Sequelize = require('sequelize');
const sequelize = require('../../config/database');
const Student = require('./Student')
const tableName = 'billingCycle';


const BillingCycle = sequelize.define('billingCycle', {
    idStudant: {
        type:Sequelize.STRING,
        allowNull: false
    }
  },{ tableName });

//Address.belongsTo(Student);
//Address.belongsTo(Student,{ foreignKey: 'fk_studentid', targetKey: 'id'});
//Address.hasOne(Student, { foreignKey: 'uuid'});
// eslint-disable-next-line


BillingCycle.prototype.toJSON = function () {
    const values = Object.assign({}, this.get());
    return values;
};


module.exports = BillingCycle; 