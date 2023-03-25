import express from "express";
import { AddEmployee, deleteEmployee, getAllEmployee, updateEmployee } from "../controller/employee/employee.controller.js";
import { employeeNames } from "../controller/employee/employee.utility.controller.js";

const router = express.Router();

// Crud Rest Api
router.post("/add", AddEmployee);
router.put("/update/:id", updateEmployee);
router.delete("/delete/:id", deleteEmployee);

// Report Used Api
router.post("/getNames",employeeNames)
router.post("/getAll",getAllEmployee)


export default router;