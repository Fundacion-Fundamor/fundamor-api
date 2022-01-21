const express = require("express");
const router = express.Router();
const employeesController = require("../controllers/employeesController");
const { employeeValidationRules, employeeValidationEditRules, validate, profileUpdateRules, passwordUpdateRules, forgotPassswordRules } = require("../middleware/validator");

const verify = require("../middleware/auth/verify");
const { onlyAdmin } = require("../middleware/auth");
//create employee
router.post("/", verify, onlyAdmin, employeeValidationRules(), validate, employeesController.create);

// employee list
router.get("/", verify, employeesController.list);

// get employee
router.get("/:id", verify, employeesController.get);

// update employee
router.put("/", verify, onlyAdmin, employeeValidationEditRules(), validate, employeesController.update);

// delete employee
router.delete("/:id", verify, onlyAdmin, employeesController.delete);


//update profile employee
router.put("/profile", verify, profileUpdateRules(), validate, employeesController.updateProfile);

//update employee password
router.put("/password", verify, passwordUpdateRules(), validate, employeesController.updatePassword);


//reset employee password
router.post("/resetPassword", forgotPassswordRules(), validate, employeesController.resetPassword);

module.exports = router;
