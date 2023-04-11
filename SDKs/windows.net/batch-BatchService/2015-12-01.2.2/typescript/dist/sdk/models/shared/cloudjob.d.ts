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
 * Gets or sets the previous state of the job. This property is not set if the job is in its initial Active state.
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
 * Gets or sets the current state of the job.
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
     * Gets or sets the list of common environment variable settings.  These environment variables are set for all tasks in the job (including the Job Manager, Job Preparation and Job Release tasks).
     */
    commonEnvironmentSettings?: EnvironmentSetting[];
    /**
     * Specifies the execution constraints for jobs created on a schedule.
     */
    constraints?: JobConstraints;
    /**
     * Gets or sets the creation time of the job.
     */
    creationTime?: Date;
    /**
     * Gets or sets the display name for the job.
     */
    displayName?: string;
    /**
     * Gets or sets the ETag of the job.
     */
    eTag?: string;
    /**
     * Contains information about the execution of a job in the Azure Batch service.
     */
    executionInfo?: JobExecutionInformation;
    /**
     * Gets or sets a string that uniquely identifies the job within the account. The id can contain any combination of alphanumeric characters including hyphens and underscores, and cannot contain more than 64 characters. It is common to use a GUID for the id.
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
     * Gets or sets the last modified time of the job.
     */
    lastModified?: Date;
    /**
     * Gets or sets a list of name-value pairs associated with the job as metadata.
     */
    metadata?: MetadataItem[];
    /**
     * Specifies how a job should be assigned to a pool.
     */
    poolInfo?: PoolInformation;
    /**
     * Gets or sets the previous state of the job. This property is not set if the job is in its initial Active state.
     */
    previousState?: CloudJobPreviousStateEnum;
    /**
     * Gets or sets the time at which the job entered its previous state. This property is not set if the job is in its initial Active state.
     */
    previousStateTransitionTime?: Date;
    /**
     * Gets or sets the priority of the job. Priority values can range from -1000 to 1000, with -1000 being the lowest priority and 1000 being the highest priority. The default value is 0.
     */
    priority?: number;
    /**
     * Gets or sets the current state of the job.
     */
    state?: CloudJobStateEnum;
    /**
     * Gets or sets the time at which the job entered its current state.
     */
    stateTransitionTime?: Date;
    /**
     * Resource usage statistics for a job.
     */
    stats?: JobStatistics;
    /**
     * Gets or sets the URL of the job.
     */
    url?: string;
    /**
     * Gets or sets the flag that determines if this job will use tasks with dependencies.
     */
    usesTaskDependencies?: boolean;
}
