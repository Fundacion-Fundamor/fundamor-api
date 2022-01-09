const express = require("express");
const router = express.Router();
const employeesController = require("../controllers/employeesController");
const { employeeValidationRules, employeeValidationEditRules, validate, profileUpdateRules, passwordUpdateRules } = require("../middleware/validator");

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


//update profile employee
router.put("/profile", verify, profileUpdateRules(), validate, employeesController.updateProfile);

//update employee password
router.put("/password", verify,passwordUpdateRules(), validate, employeesController.updatePassword);

module.exports = router;
