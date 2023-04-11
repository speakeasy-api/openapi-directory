import { SpeakeasyBase } from "../../../internal/utils";
import { AutoPoolSpecification } from "./autopoolspecification";
/**
 * Specifies how a job should be assigned to a pool.
 */
export declare class PoolInformation extends SpeakeasyBase {
    /**
     * Specifies characteristics for a temporary 'auto pool'. The Batch service will create this auto pool, run all the tasks for the job on it, and will delete the pool once the job has completed.
     */
    autoPoolSpecification?: AutoPoolSpecification;
    /**
     * Gets or sets the id of an existing pool. All the tasks of the job will run on the specified pool. You must specify either PoolId or AutoPoolSpecification, but not both.
     */
    poolId?: string;
}
