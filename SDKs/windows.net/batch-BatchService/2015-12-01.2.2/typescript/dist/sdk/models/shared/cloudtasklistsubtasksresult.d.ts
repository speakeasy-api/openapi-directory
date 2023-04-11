import { SpeakeasyBase } from "../../../internal/utils";
import { SubtaskInformation } from "./subtaskinformation";
/**
 * Response to a CloudTaskOperations.ListSubtasks request.
 */
export declare class CloudTaskListSubtasksResult extends SpeakeasyBase {
    /**
     * Gets or sets the list of information of subtasks.
     */
    value?: SubtaskInformation[];
}
