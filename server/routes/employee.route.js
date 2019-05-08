const express = require('express');
const router = express.Router();

const emploCtrl = require('../controlers/employee.controller')

router.get('/api/employees', emploCtrl.getEmployees);
router.post('/api/employees', emploCtrl.createEmployee);
router.get('/api/employees/:id', emploCtrl.getEmployee);
router.put('/api/employees/:id', emploCtrl.editEmployee);
router.delete('/api/employees/:id', emploCtrl.deleteEmployee);


module.exports = router;