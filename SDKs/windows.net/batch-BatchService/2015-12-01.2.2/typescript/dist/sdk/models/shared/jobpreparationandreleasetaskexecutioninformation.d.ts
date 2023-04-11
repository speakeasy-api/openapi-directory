import { SpeakeasyBase } from "../../../internal/utils";
import { JobPreparationTaskExecutionInformation } from "./jobpreparationtaskexecutioninformation";
import { JobReleaseTaskExecutionInformation } from "./jobreleasetaskexecutioninformation";
/**
 * The status of the Job Preparation and Job Release tasks on a particular compute node.
 */
export declare class JobPreparationAndReleaseTaskExecutionInformation extends SpeakeasyBase {
    /**
     * Contains information about the execution of a Job Preparation task on a compute node.
     */
    jobPreparationTaskExecutionInfo?: JobPreparationTaskExecutionInformation;
    /**
     * Contains information about the execution of a Job Release task on a compute node.
     */
    jobReleaseTaskExecutionInfo?: JobReleaseTaskExecutionInformation;
    /**
     * Gets or sets the id of the compute node to which this entry refers.
     */
    nodeId?: string;
    /**
     * Gets or sets the URL of the compute node to which this entry refers.
     */
    nodeUrl?: string;
    /**
     * Gets or sets the id of the pool containing the compute node to which this entry refers.
     */
    poolId?: string;
}
