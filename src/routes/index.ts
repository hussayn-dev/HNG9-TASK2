import express from "express"
import assignmentController from "../controller/assignmentController" 
const router = express.Router();

router.get("/", assignmentController.index);


export default router
