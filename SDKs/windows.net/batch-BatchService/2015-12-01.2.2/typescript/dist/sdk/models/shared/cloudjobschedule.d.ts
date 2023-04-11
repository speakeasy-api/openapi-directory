import { SpeakeasyBase } from "../../../internal/utils";
import { JobScheduleExecutionInformation } from "./jobscheduleexecutioninformation";
import { JobScheduleStatistics } from "./jobschedulestatistics";
import { JobSpecification } from "./jobspecification";
import { MetadataItem } from "./metadataitem";
import { Schedule } from "./schedule";
/**
 * Gets or sets the previous state of the job schedule.
 */
export declare enum CloudJobSchedulePreviousStateEnum {
    Active = "active",
    Completed = "completed",
    Disabled = "disabled",
    Terminating = "terminating",
    Deleting = "deleting"
}
/**
 * Gets or sets the current state of the job schedule.
 */
export declare enum CloudJobScheduleStateEnum {
    Active = "active",
    Completed = "completed",
    Disabled = "disabled",
    Terminating = "terminating",
    Deleting = "deleting"
}
/**
 * A job schedule that allows recurring jobs by specifying when to run jobs and a specification used to create each job.
 */
export declare class CloudJobSchedule extends SpeakeasyBase {
    /**
     * Gets or sets the creation time of the job schedule.
     */
    creationTime?: Date;
    /**
     * Gets or sets the display name for the schedule.
     */
    displayName?: string;
    /**
     * Gets or sets the ETag of the job schedule.
     */
    eTag?: string;
    /**
     * Specifies how tasks should be run in a job associated with a job schedule.
     */
    executionInfo?: JobScheduleExecutionInformation;
    /**
     * Gets or sets a string that uniquely identifies the schedule within the account. A GUID is recommended.
     */
    id?: string;
    /**
     * Specifies details of the jobs to be created on a schedule.
     */
    jobSpecification?: JobSpecification;
    /**
     * Gets or sets the last modified time of the job schedule.
     */
    lastModified?: Date;
    /**
     * Gets or sets a list of name-value pairs associated with the schedule as metadata.
     */
    metadata?: MetadataItem[];
    /**
     * Gets or sets the previous state of the job schedule.
     */
    previousState?: CloudJobSchedulePreviousStateEnum;
    /**
     * Gets or sets the time at which the job schedule entered its previous state.
     */
    previousStateTransitionTime?: Date;
    /**
     * The schedule according to which jobs will be created
     */
    schedule?: Schedule;
    /**
     * Gets or sets the current state of the job schedule.
     */
    state?: CloudJobScheduleStateEnum;
    /**
     * Gets or sets the time at which the job schedule entered the current state.
     */
    stateTransitionTime?: Date;
    /**
     * The lifetime resource usage statistics for a job schedule.
     */
    stats?: JobScheduleStatistics;
    /**
     * Gets or sets the URL of the job schedule.
     */
    url?: string;
}
