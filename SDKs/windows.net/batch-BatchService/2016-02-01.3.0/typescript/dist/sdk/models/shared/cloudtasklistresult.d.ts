import { SpeakeasyBase } from "../../../internal/utils";
import { CloudTask } from "./cloudtask";
/**
 * Response to a CloudTaskOperations.List request.
 */
export declare class CloudTaskListResult extends SpeakeasyBase {
    /**
     * The URL to get the next set of results.
     */
    odataNextLink?: string;
    /**
     * The list of tasks.
     */
    value?: CloudTask[];
}
