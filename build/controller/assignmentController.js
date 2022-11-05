"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
class AssignmentController {
    index(req, res) {
        const obj = {
            slackUsername: "hussaynabdsamad07",
            backend: true,
            age: 20,
            bio: "I am Hussayn AbdulSamad, a backend developer with experience working with node and Laravel. I am a self motivated problem solver, with enthusiasm towards learning, I hope to go far in my HNG journey"
        };
        res.status(200).json(obj);
    }
    operation(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const validations = [
                    (0, express_validator_1.check)("operation_type").isIn(["+", "-", "x"]).withMessage('must contain either x or - or + to perform operation'),
                ];
                for (let validation of validations) {
                    const result = yield validation.run(req);
                    if (result.errors.length)
                        break;
                }
                const errors = (0, express_validator_1.validationResult)(req);
                if (!errors.isEmpty()) {
                    res.status(400).json({ errors: errors.array() });
                }
                let result = 0;
                let x = req.body.x;
                let y = req.body.y;
                let operation_type = req.body.operation_type;
                switch (operation_type) {
                    case "+":
                        result += x + y;
                        break;
                    case "-":
                        result += x - y;
                        break;
                    case "x":
                        result += x * y;
                        break;
                }
                res.json({
                    slackUserName: "hussaynabdsamad07",
                    result,
                    operation_type,
                });
            }
            catch (error) {
                return res.status(400).json({
                    status: "failed",
                    message: error.message
                });
            }
        });
    }
}
exports.default = new AssignmentController();
