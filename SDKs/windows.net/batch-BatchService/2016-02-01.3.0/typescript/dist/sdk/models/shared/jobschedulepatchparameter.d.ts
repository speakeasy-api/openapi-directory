import { SpeakeasyBase } from "../../../internal/utils";
import { JobSpecification } from "./jobspecification";
import { MetadataItem } from "./metadataitem";
import { Schedule } from "./schedule";
/**
 * Parameters for a CloudJobScheduleOperations.Patch request.
 */
export declare class JobSchedulePatchParameter extends SpeakeasyBase {
    /**
     * Specifies details of the jobs to be created on a schedule.
     */
    jobSpecification?: JobSpecification;
    /**
     * A list of name-value pairs associated with the job schedule as metadata.
     */
    metadata?: MetadataItem[];
    /**
     * The schedule according to which jobs will be created
     */
    schedule?: Schedule;
}
