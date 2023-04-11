import { SpeakeasyBase } from "../../../internal/utils";
import { EnvironmentSetting } from "./environmentsetting";
import { JobConstraints } from "./jobconstraints";
import { JobExecutionInformation } from "./jobexecutioninformation";
import { JobManagerTask } from "./jobmanagertask";
import { JobPreparationTask } from "./jobpreparationtask";
import { JobReleaseTask } from "./jobreleasetask";
import { JobStatistics } from "./jobstatistics";
import { MetadataItem } from "./metadataitem";
import { PoolInformation } from "./poolinformation";
/**
 * The previous state of the job. This property is not set if the job is in its initial Active state.
 */
export declare enum CloudJobPreviousStateEnum {
    Active = "active",
    Disabling = "disabling",
    Disabled = "disabled",
    Enabling = "enabling",
    Terminating = "terminating",
    Completed = "completed",
    Deleting = "deleting"
}
/**
 * The current state of the job.
 */
export declare enum CloudJobStateEnum {
    Active = "active",
    Disabling = "disabling",
    Disabled = "disabled",
    Enabling = "enabling",
    Terminating = "terminating",
    Completed = "completed",
    Deleting = "deleting"
}
/**
 * An Azure Batch job.
 */
export declare class CloudJob extends SpeakeasyBase {
    /**
     * The list of common environment variable settings. These environment variables are set for all tasks in the job (including the Job Manager, Job Preparation and Job Release tasks).
     */
    commonEnvironmentSettings?: EnvironmentSetting[];
    /**
     * Specifies the execution constraints for jobs created on a schedule.
     */
    constraints?: JobConstraints;
    /**
     * The creation time of the job.
     */
    creationTime?: Date;
    /**
     * The display name for the job.
     */
    displayName?: string;
    /**
     * The ETag of the job.
     */
    eTag?: string;
    /**
     * Contains information about the execution of a job in the Azure Batch service.
     */
    executionInfo?: JobExecutionInformation;
    /**
     * A string that uniquely identifies the job within the account. The id can contain any combination of alphanumeric characters including hyphens and underscores, and cannot contain more than 64 characters. It is common to use a GUID for the id.
     */
    id?: string;
    /**
     * Specifies details of a Job Manager task.
     */
    jobManagerTask?: JobManagerTask;
    /**
     * A Job Preparation task to run before any tasks of the job on any given compute node.
     */
    jobPreparationTask?: JobPreparationTask;
    /**
     * A Job Release task to run on job completion on any compute node where the job has run.
     */
    jobReleaseTask?: JobReleaseTask;
    /**
     * The last modified time of the job.
     */
    lastModified?: Date;
    /**
     * A list of name-value pairs associated with the job as metadata.
     */
    metadata?: MetadataItem[];
    /**
     * Specifies how a job should be assigned to a pool.
     */
    poolInfo?: PoolInformation;
    /**
     * The previous state of the job. This property is not set if the job is in its initial Active state.
     */
    previousState?: CloudJobPreviousStateEnum;
    /**
     * The time at which the job entered its previous state. This property is not set if the job is in its initial Active state.
     */
    previousStateTransitionTime?: Date;
    /**
     * The priority of the job. Priority values can range from -1000 to 1000, with -1000 being the lowest priority and 1000 being the highest priority. The default value is 0.
     */
    priority?: number;
    /**
     * The current state of the job.
     */
    state?: CloudJobStateEnum;
    /**
     * The time at which the job entered its current state.
     */
    stateTransitionTime?: Date;
    /**
     * Resource usage statistics for a job.
     */
    stats?: JobStatistics;
    /**
     * The URL of the job.
     */
    url?: string;
    /**
     * The flag that determines if this job will use tasks with dependencies.
     */
    usesTaskDependencies?: boolean;
}
