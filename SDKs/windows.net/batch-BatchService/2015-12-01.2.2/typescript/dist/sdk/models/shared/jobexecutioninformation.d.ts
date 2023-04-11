import { SpeakeasyBase } from "../../../internal/utils";
import { JobSchedulingError } from "./jobschedulingerror";
/**
 * Contains information about the execution of a job in the Azure Batch service.
 */
export declare class JobExecutionInformation extends SpeakeasyBase {
    /**
     * Gets or sets the completion time of the job. This property is set only if the job is in the completed state.
     */
    endTime?: Date;
    /**
     * Gets or sets the id of the pool to which this job is assigned.
     */
    poolId?: string;
    /**
     * An error encountered by the Batch service when scheduling a job.
     */
    schedulingError?: JobSchedulingError;
    /**
     * Gets or sets the start time of the job.
     */
    startTime: Date;
    /**
     * Gets or sets a string describing the reason the job ended.
     */
    terminateReason?: string;
}
