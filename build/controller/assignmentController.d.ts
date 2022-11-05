import { Request, Response } from "express";
declare class AssignmentController {
    index(req: Request, res: Response): void;
    operation(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
}
declare const _default: AssignmentController;
export default _default;
