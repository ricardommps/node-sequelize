const Student = require('../models/Student');
const Address = require('../models/Address');

const StudentController = () => {
  const register = async (req, res) => {
    const { body } = req;

    try {


      Student.create({
        name: body.name,
        cpf: body.cpf,
        rg: body.rg,
        email: body.email,
        addresses: body.address
      }, {
          include: [Student.Addresses]
        }).then(createdStudent => {
          return res.status(200).json({ createdStudent });
        }).catch(errStudant => {
          return res.status(500).json({ msg: 'Internal server errStudant', error: errStudant });
        });

      /* Student.create({ 
        name: body.name,
        cpf: body.cpf,
        rg: body.rg,
        email: body.email,
      }).then(createdStudent => {		
        // Send created customer to client
        student = createdStudent;
        return Address.create({
          street: body.street,
            number: body.number,
            complement: body.complement,
            zipcode: body.zipcode,
            neighborhood: body.neighborhood,
            district: body.district,
            city: body.city
        })
      }).then(address => {
        student.setAddress(address)
        return res.status(200).json({ student });
      }).catch(function (errStudant) {
        // print the error details
        console.log(errStudant)
        return res.status(500).json({ msg: 'Internal server errStudant', error: errStudant });
      }); */



    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error', error: err });
    }
  };

  const getAll = async (req, res) => {
    try {
      Student.findAll({
        include: [{
          model: Address
        }]
      }).then(student => {
        return res.status(200).json({ student });
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error', error: err });
    }
  };

  const getStudendById = async (req, res) => {
    try {
      Student.find(
        {
          where: {
            id: 2
          },
          include: [{
            model: Address
        }
        ]
      }).then(student => {
        return res.status(200).json({ student });
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error', error: err });
    }
  };

  const updateStudent = async (req, res) => {
    

    try {

      const { body } = req;

      Student.update(
        {
          name: body.name,
          cpf: body.cpf,
          rg: body.rg,
          email: body.email,
          addresses: body.address
        },
        { 
          where: { id: 2 },
        
        }
      ).then(student => {
        return res.status(200).json({ student });
      }); 



    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error', error: err });
    }




  };

  return {
    register,
    getAll,
    getStudendById,
    updateStudent
  };
}
module.exports = StudentController;
