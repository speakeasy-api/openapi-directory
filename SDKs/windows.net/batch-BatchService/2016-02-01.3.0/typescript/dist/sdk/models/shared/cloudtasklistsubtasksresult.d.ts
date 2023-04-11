import { SpeakeasyBase } from "../../../internal/utils";
import { SubtaskInformation } from "./subtaskinformation";
/**
 * Response to a CloudTaskOperations.ListSubtasks request.
 */
export declare class CloudTaskListSubtasksResult extends SpeakeasyBase {
    /**
     * The list of information of subtasks.
     */
    value?: SubtaskInformation[];
}
