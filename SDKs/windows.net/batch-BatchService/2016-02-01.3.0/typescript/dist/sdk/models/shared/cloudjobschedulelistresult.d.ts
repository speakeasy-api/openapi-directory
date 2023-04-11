import { SpeakeasyBase } from "../../../internal/utils";
import { CloudJobSchedule } from "./cloudjobschedule";
/**
 * Response to a CloudJobScheduleOperation.List request.
 */
export declare class CloudJobScheduleListResult extends SpeakeasyBase {
    /**
     * The URL to get the next set of results.
     */
    odataNextLink?: string;
    /**
     * The list of job schedules.
     */
    value?: CloudJobSchedule[];
}
