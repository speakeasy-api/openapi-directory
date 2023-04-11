import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The schedule according to which jobs will be created
 */
export declare class Schedule extends SpeakeasyBase {
    /**
     * Gets or sets a time after which no job will be created under this job schedule.  The schedule will move to the completed state as soon as this deadline is past and there is no active job under this job schedule.
     */
    doNotRunAfter?: Date;
    /**
     * Gets or sets the earliest time at which any job may be created under this job schedule. If you do not specify a doNotRunUntil time, the schedule becomes ready to create jobs immediately.
     */
    doNotRunUntil?: Date;
    /**
     * Gets or sets the time interval between the start times of two successive jobs under the job schedule. A job schedule can have at most one active job under it at any given time.
     */
    recurrenceInterval?: string;
    /**
     * Gets or sets the time interval, starting from the time at which the schedule indicates a job should be created, within which a job must be created.  If a job is not created within the startWindow interval, then the 'opportunity' is lost; no job will be created until the next recurrence of the schedule.
     */
    startWindow?: string;
}
