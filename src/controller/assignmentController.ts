import { request, Request, Response} from "express";

class AssignmentController {

index (req: Request  , res: Response) {
    type Object = {
        slackUsername: string,
        backend: boolean,
        age: number,
        bio: string
    }

  const obj : Object = {
    slackUsername: "hussaynabdsamad07",
    backend :true,
    age : 20,
    bio : "I am Hussayn AbdulSamad, a backend developer with experience working with node and Laravel. I am a self motivated problem solver, with enthusiasm towards learning, I hope to go far in my HNG journey"
  }
   res.status(200).json(obj)
}

    

}



export default new AssignmentController()