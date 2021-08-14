const express = require("express");
const router = express.Router();
const employeesController = require("../controllers/employeesController");

// employee list
router.get("/", employeesController.list);

// get employee
router.get("/:id", employeesController.get);

// create employee
router.post("/", employeesController.create);

// update employee
router.put("/", employeesController.update);

// delete employee
router.delete("/", employeesController.delete);

module.exports = router;
