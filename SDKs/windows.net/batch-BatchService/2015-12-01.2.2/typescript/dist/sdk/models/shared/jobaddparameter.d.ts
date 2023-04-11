import { SpeakeasyBase } from "../../../internal/utils";
import { EnvironmentSetting } from "./environmentsetting";
import { JobConstraints } from "./jobconstraints";
import { JobManagerTask } from "./jobmanagertask";
import { JobPreparationTask } from "./jobpreparationtask";
import { JobReleaseTask } from "./jobreleasetask";
import { MetadataItem } from "./metadataitem";
import { PoolInformation } from "./poolinformation";
/**
 * An Azure Batch job to add.
 */
export declare class JobAddParameter extends SpeakeasyBase {
    /**
     * Gets or sets the list of common environment variable settings.  These environment variables are set for all tasks in the job (including the Job Manager, Job Preparation and Job Release tasks).
     */
    commonEnvironmentSettings?: EnvironmentSetting[];
    /**
     * Specifies the execution constraints for jobs created on a schedule.
     */
    constraints?: JobConstraints;
    /**
     * Gets or sets the display name for the job.
     */
    displayName?: string;
    /**
     * Gets or sets a string that uniquely identifies the job within the account. The id can contain any combination of alphanumeric characters including hyphens and underscores, and cannot contain more than 64 characters. It is common to use a GUID for the id.
     */
    id: string;
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
     * Gets or sets a list of name-value pairs associated with the job as metadata.
     */
    metadata?: MetadataItem[];
    /**
     * Specifies how a job should be assigned to a pool.
     */
    poolInfo: PoolInformation;
    /**
     * Gets or sets the priority of the job. Priority values can range from -1000 to 1000, with -1000 being the lowest priority and 1000 being the highest priority. The default value is 0.
     */
    priority?: number;
    /**
     * Gets or sets the flag that determines if this job will use tasks with dependencies.
     */
    usesTaskDependencies?: boolean;
}
