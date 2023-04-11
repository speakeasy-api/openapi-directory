import { SpeakeasyBase } from "../../../internal/utils";
import { PoolSpecification } from "./poolspecification";
/**
 * The minimum lifetime of created auto pools, and how multiple jobs on a schedule are assigned to pools.
 */
export declare enum AutoPoolSpecificationPoolLifetimeOptionEnum {
    Jobschedule = "jobschedule",
    Job = "job",
    Unmapped = "unmapped"
}
/**
 * Specifies characteristics for a temporary 'auto pool'. The Batch service will create this auto pool, run all the tasks for the job on it, and will delete the pool once the job has completed.
 */
export declare class AutoPoolSpecification extends SpeakeasyBase {
    /**
     * A prefix to be added to the unique identifier when a pool is automatically created. The prefix can be up to 20 characters long.
     */
    autoPoolIdPrefix?: string;
    /**
     * Whether to keep an auto pool alive after its lifetime expires.
     */
    keepAlive?: boolean;
    /**
     * Specification for creating a new pool.
     */
    pool?: PoolSpecification;
    /**
     * The minimum lifetime of created auto pools, and how multiple jobs on a schedule are assigned to pools.
     */
    poolLifetimeOption: AutoPoolSpecificationPoolLifetimeOptionEnum;
}
