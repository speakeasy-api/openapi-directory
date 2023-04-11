import { SpeakeasyBase } from "../../../internal/utils";
import { CloudTask } from "./cloudtask";
/**
 * Response to a CloudTaskOperations.List request.
 */
export declare class CloudTaskListResult extends SpeakeasyBase {
    /**
     * Gets or sets the URL to get the next set of results.
     */
    odataNextLink?: string;
    /**
     * Gets or sets the list of tasks.
     */
    value?: CloudTask[];
}
