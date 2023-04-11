import { SpeakeasyBase } from "../../../internal/utils";
import { Assignee } from "./assignee";
import { Follower } from "./follower";
import { Target } from "./target";
export declare class NewTaskRequest extends SpeakeasyBase {
    assignee: Assignee;
    context: string;
    description: string;
    domain: string;
    dueDate: string;
    followers: Follower[];
    name: string;
    parentTaskId: string;
    priority: string;
    surrogateKey: string;
    target: Target[];
}
