import { SpeakeasyBase } from "../../../internal/utils";
import { CloudJob } from "./cloudjob";
/**
 * Response to a CloudJobOperation.List or ListFromJobSchedule request.
 */
export declare class CloudJobListResult extends SpeakeasyBase {
    /**
     * The URL to get the next set of results.
     */
    odataNextLink?: string;
    /**
     * The list of jobs.
     */
    value?: CloudJob[];
}
