"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const assignmentController_1 = __importDefault(require("../controller/assignmentController"));
const router = express_1.default.Router();
router.get("/", assignmentController_1.default.index);
router.post("/", assignmentController_1.default.operation);
exports.default = router;
