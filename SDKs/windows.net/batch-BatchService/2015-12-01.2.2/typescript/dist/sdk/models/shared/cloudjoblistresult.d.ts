import { SpeakeasyBase } from "../../../internal/utils";
import { CloudJob } from "./cloudjob";
/**
 * Response to a CloudJobOperations.List or ListFromJobSchedule request.
 */
export declare class CloudJobListResult extends SpeakeasyBase {
    /**
     * Gets or sets the URL to get the next set of results.
     */
    odataNextLink?: string;
    /**
     * Gets or sets the list of jobs.
     */
    value?: CloudJob[];
}
