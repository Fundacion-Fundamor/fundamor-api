const express = require("express");
const router = express.Router();
const employeesController = require("../controllers/employeesController");
const { employeeValidationRules, employeeValidationEditRules, validate } = require("../middleware/validator");

const verify = require("../middleware/auth/verify");
//create employee
router.post("/", verify, employeeValidationRules(), validate, employeesController.create);

// employee list
router.get("/", verify, employeesController.list);

// get employee
router.get("/:id", verify, employeesController.get);

// update employee
router.put("/", verify, employeeValidationEditRules(), validate, employeesController.update);

// delete employee
router.delete("/:id", verify, employeesController.delete);


//updateProfile employee
router.put("/profile", verify, employeesController.updateProfile);
module.exports = router;
