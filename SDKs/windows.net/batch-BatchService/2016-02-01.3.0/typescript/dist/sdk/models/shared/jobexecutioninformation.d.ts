import { SpeakeasyBase } from "../../../internal/utils";
import { JobSchedulingError } from "./jobschedulingerror";
/**
 * Contains information about the execution of a job in the Azure Batch service.
 */
export declare class JobExecutionInformation extends SpeakeasyBase {
    /**
     * The completion time of the job. This property is set only if the job is in the completed state.
     */
    endTime?: Date;
    /**
     * The id of the pool to which this job is assigned.
     */
    poolId?: string;
    /**
     * An error encountered by the Batch service when scheduling a job.
     */
    schedulingError?: JobSchedulingError;
    /**
     * The start time of the job.
     */
    startTime: Date;
    /**
     * A string describing the reason the job ended.
     */
    terminateReason?: string;
}
