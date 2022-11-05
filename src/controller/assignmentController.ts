import { request, Request, Response } from "express";
import { check, validationResult } from "express-validator";

class AssignmentController {
  index(req: Request, res: Response) {
    type Object = {
      slackUsername: string;
      backend: boolean;
      age: number;
      bio: string;
    };

    const obj: Object = {
      slackUsername: "hussaynabdsamad07",
      backend: true,
      age: 20,
      bio: "I am Hussayn AbdulSamad, a backend developer with experience working with node and Laravel. I am a self motivated problem solver, with enthusiasm towards learning, I hope to go far in my HNG journey",
    };
    res.status(200).json(obj);
  }

  async operation(req: Request, res: Response) {
    try {
      const validations = [
        check("operation_type")
          .isIn(["+", "-", "x"])
          .withMessage(
            'must contain either "x " for multiplication or - or + to perform operation'
          ),
        check("x").notEmpty().withMessage("x field is required"),
        check("y").notEmpty().withMessage("y field is required"),
      ];

      for (let validation of validations) {
        const result: any = await validation.run(req);
        if (result.errors.length) break;
      }
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
      }

      let result: number = 0;
      let x: number = Number(req.body.x);
      let y: number = Number(req.body.y);
      let operation_type= null;
      let operationType = req.body.operation_type;


      if (
        operationType.includes("add") ||
        operationType.includes("addition") ||
        operationType.includes("+")
      ) {
        result += x + y;
        operation_type = "addition";
      }
      if (
        operationType.includes("multiply") ||
        operationType.includes("x") ||
        operationType.includes("*") || 
        operationType.includes("multiplication"),
        operationType.includes("times")
      ) {
        result += x * y;
        operation_type = "multiplication"
      }
      if (
        operationType.includes("subtraction") ||
        operationType.includes("minus") ||
        operationType.includes("-")
      ) {
        result += x - y;
        operation_type = "subtraction"
      }
// submitted late because of school test forgive me
      res.status(200).json({
        slackUserName: "hussaynabdsamad07",
        result,
        operation_type,
      });
    } catch (error: any) {
      return res.status(400).json({
        status: "failed",
        message: error.message,
      });
    }
  }
}

export default new AssignmentController();
