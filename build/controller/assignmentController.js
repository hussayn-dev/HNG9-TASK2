"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
}
exports.default = new AssignmentController();
