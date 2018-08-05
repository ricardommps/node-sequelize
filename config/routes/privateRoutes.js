const privateRoutes = {
  'GET /users': 'UserController.getAll',
  'POST /student': 'StudentController.register',
  'GET /students': 'StudentController.getAll',
  'GET /student': 'StudentController.getStudendById',
  'PUT /student' : 'StudentController.updateStudent'
};

module.exports = privateRoutes;
