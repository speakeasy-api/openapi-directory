import { SpeakeasyBase } from "../../../internal/utils";
import { JobSpecification } from "./jobspecification";
import { MetadataItem } from "./metadataitem";
import { Schedule } from "./schedule";
/**
 * A job schedule that allows recurring jobs by specifying when to run jobs and a specification used to create each job.
 */
export declare class JobScheduleAddParameter extends SpeakeasyBase {
    /**
     * The display name for the schedule.
     */
    displayName?: string;
    /**
     * A string that uniquely identifies the schedule within the account. A GUID is recommended.
     */
    id: string;
    /**
     * Specifies details of the jobs to be created on a schedule.
     */
    jobSpecification: JobSpecification;
    /**
     * A list of name-value pairs associated with the schedule as metadata.
     */
    metadata?: MetadataItem[];
    /**
     * The schedule according to which jobs will be created
     */
    schedule: Schedule;
}
