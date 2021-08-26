const express = require("express");
const router = express.Router();
const employeesController = require("../controllers/employeesController");


//create employee
router.post("/", employeesController.create);

// employee list
router.get("/", employeesController.list);

// get employee
router.get("/:id", employeesController.get);

// update employee
router.put("/", employeesController.update);

// delete employee
router.delete("/:id", employeesController.delete);

module.exports = router;
