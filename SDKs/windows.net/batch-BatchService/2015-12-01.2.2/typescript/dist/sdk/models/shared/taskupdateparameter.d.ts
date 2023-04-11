import { SpeakeasyBase } from "../../../internal/utils";
import { TaskConstraints } from "./taskconstraints";
/**
 * Parameters for a CloudTaskOperations.Update request.
 */
export declare class TaskUpdateParameter extends SpeakeasyBase {
    /**
     * Constraints to apply to the Job Manager task.
     */
    constraints?: TaskConstraints;
}
