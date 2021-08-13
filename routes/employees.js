const express = require("express");
const router = express.Router();
const employeeController = require("../src/controllers/employeeController");

// employee list
router.get("/", employeeController.listEmployees);

// get employee
router.get("/:id", employeeController.getEmployee);

// create employee
router.post("/", employeeController.createEmployee);

// update employee
router.put("/", employeeController.updateEmployee);

// delete employee
router.delete("/", employeeController.deleteEmployee);

module.exports = router;
