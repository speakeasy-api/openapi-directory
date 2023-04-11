import { SpeakeasyBase } from "../../../internal/utils";
import { EnvironmentSetting } from "./environmentsetting";
import { JobConstraints } from "./jobconstraints";
import { JobManagerTask } from "./jobmanagertask";
import { JobPreparationTask } from "./jobpreparationtask";
import { JobReleaseTask } from "./jobreleasetask";
import { MetadataItem } from "./metadataitem";
import { PoolInformation } from "./poolinformation";
/**
 * Specifies details of the jobs to be created on a schedule.
 */
export declare class JobSpecification extends SpeakeasyBase {
    /**
     * Gets or sets a list of common environment variable settings.  These environment variables are set for all tasks in jobs created under this schedule (including the Job Manager, Job Preparation and Job Release tasks).
     */
    commonEnvironmentSettings?: EnvironmentSetting[];
    /**
     * Specifies the execution constraints for jobs created on a schedule.
     */
    constraints?: JobConstraints;
    /**
     * Gets or sets the display name for jobs created under this schedule. It need not be unique and can contain any Unicode characters up to a maximum length of 1024.
     */
    displayName?: string;
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
     * Gets or sets a list of name-value pairs associated with each job created under this schedule as metadata.
     */
    metadata?: MetadataItem[];
    /**
     * Specifies how a job should be assigned to a pool.
     */
    poolInfo?: PoolInformation;
    /**
     * Gets or sets the priority of jobs created under this schedule. Priority values can range from -1000 to 1000, with -1000 being the lowest priority and 1000 being the highest priority. The default value is 0.
     */
    priority?: number;
    /**
     * Gets or sets the flag that determines if this job will use tasks with dependencies.
     */
    usesTaskDependencies?: boolean;
}
