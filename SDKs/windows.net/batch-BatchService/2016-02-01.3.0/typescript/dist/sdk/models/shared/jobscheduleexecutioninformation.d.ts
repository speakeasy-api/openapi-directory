import { SpeakeasyBase } from "../../../internal/utils";
import { RecentJob } from "./recentjob";
/**
 * Specifies how tasks should be run in a job associated with a job schedule.
 */
export declare class JobScheduleExecutionInformation extends SpeakeasyBase {
    /**
     * The time at which the schedule ended. This property is set only if the job schedule is in the completed state.
     */
    endTime?: Date;
    /**
     * The next time at which a job will be created under this schedule.
     */
    nextRunTime?: Date;
    /**
     * Information about the most recent job to run under the job schedule.
     */
    recentJob?: RecentJob;
}
