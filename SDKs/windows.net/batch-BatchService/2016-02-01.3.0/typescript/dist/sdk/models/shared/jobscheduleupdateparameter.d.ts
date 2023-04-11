import { SpeakeasyBase } from "../../../internal/utils";
import { JobSpecification } from "./jobspecification";
import { MetadataItem } from "./metadataitem";
import { Schedule } from "./schedule";
/**
 * Parameters for a CloudJobScheduleOperations.Update request.
 */
export declare class JobScheduleUpdateParameter extends SpeakeasyBase {
    /**
     * Specifies details of the jobs to be created on a schedule.
     */
    jobSpecification: JobSpecification;
    /**
     * A list of name-value pairs associated with the job schedule as metadata. If you do not specify this element, it takes the default value of an empty list; in effect, any existing metadata is deleted.
     */
    metadata?: MetadataItem[];
    /**
     * The schedule according to which jobs will be created
     */
    schedule: Schedule;
}
