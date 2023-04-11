import { SpeakeasyBase } from "../../../internal/utils";
import { CloudJobSchedule } from "./cloudjobschedule";
/**
 * Response to a CloudJobScheduleOperations.List request.
 */
export declare class CloudJobScheduleListResult extends SpeakeasyBase {
    /**
     * Gets or sets the URL to get the next set of results.
     */
    odataNextLink?: string;
    /**
     * Gets or sets the list of job schedules.
     */
    value?: CloudJobSchedule[];
}
