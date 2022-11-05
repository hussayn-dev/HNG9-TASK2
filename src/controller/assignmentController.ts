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
      let x: number = req.body.x;
      let y: number = req.body.y;
      let operation_type: string = req.body.operation_type;

      // switch (operation_type) {
      // case 'add":
      //   case "+":
      //   ca
      //  result += x + y;
      //  break;
      //  case "substracttion":
      //  case "-" :
      //  result += x - y;
      //  break;
      //  case "multiplication":
      //  case "x" :
      //  result += x * y;
      //  break;
      // }
      if (
        operation_type.includes("add") ||
        operation_type.includes("addition") ||
        operation_type.includes("+")
      ) {
        result += x + y;
      }
      if (
        operation_type.includes("multiply") ||
        operation_type.includes("x") ||
        operation_type.includes("*") ||
        operation_type.includes("times")
      ) {
        result += x * y;
      }
      if (
        operation_type.includes("substracttion") ||
        operation_type.includes("minus") ||
        operation_type.includes("-")
      ) {
        result += x - y;
      }
// submitted late because of school test forgive me
      res.json({
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
