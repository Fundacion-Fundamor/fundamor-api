const express = require("express");
const router = express.Router();
const employeesController = require("../controllers/employeesController");
const { employeeValidationRules, validate } = require("../middleware/validator");

const verify = require("../middleware/auth/verify");
//create employee
router.post("/", verify, employeeValidationRules(), validate, employeesController.create);

// employee list
router.get("/", verify, employeesController.list);

// get employee
router.get("/:id", verify, employeesController.get);

// update employee
router.put("/", verify, employeeValidationRules(), validate, employeesController.update);

// delete employee
router.delete("/:id", verify, employeesController.delete);

module.exports = router;
