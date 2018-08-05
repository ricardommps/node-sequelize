
const Sequelize = require('sequelize');
const sequelize = require('../../config/database');
const Address = require('./Address')

const tableName = 'student';


const Student = sequelize.define('student', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cpf: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    rg: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    }
  },{ tableName });


  Student.Addresses = Student.hasMany(Address);


  Student.prototype.toJSON = function () {
    const values = Object.assign({}, this.get());
    return values;
};

/* const Student = sequelize.define('Student', {
    uuid: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
    },
    cpf: {
        type: Sequelize.STRING,
        unique: true,
    },
    rg: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING,
        unique: true,
    }
},
    { tableName });
//Student.hasMany(Address);

// eslint-disable-next-line
//Student.Address = Student.hasMany(Address);
Student.Addresses = Student.hasMany(Address);
//Student.hasOne(Address,{ foreignKey: "uuid", as: 'StudentAddress', constraints: true }); 
//Address.belongsTo(Student, {constraints: false, allowNull:true, defaultValue:null});
//Student.hasOne(Address, { as: 'Address', foreignKey: 'uuid', sourceKey: 'uuid' });
Student.prototype.toJSON = function () {
    const values = Object.assign({}, this.get());
    return values;
}; */


module.exports = Student;
 