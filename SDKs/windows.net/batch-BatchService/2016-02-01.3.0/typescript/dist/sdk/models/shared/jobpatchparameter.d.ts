import { SpeakeasyBase } from "../../../internal/utils";
import { JobConstraints } from "./jobconstraints";
import { MetadataItem } from "./metadataitem";
import { PoolInformation } from "./poolinformation";
/**
 * Parameters for a CloudJobOperations.Patch request.
 */
export declare class JobPatchParameter extends SpeakeasyBase {
    /**
     * Specifies the execution constraints for jobs created on a schedule.
     */
    constraints?: JobConstraints;
    /**
     * A list of name-value pairs associated with the job as metadata. If omitted, the existing job metadata is left unchanged.
     */
    metadata?: MetadataItem[];
    /**
     * Specifies how a job should be assigned to a pool.
     */
    poolInfo?: PoolInformation;
    /**
     * The priority of the job. Priority values can range from -1000 to 1000, with -1000 being the lowest priority and 1000 being the highest priority. If omitted, the priority of the job is left unchanged.
     */
    priority?: number;
}
