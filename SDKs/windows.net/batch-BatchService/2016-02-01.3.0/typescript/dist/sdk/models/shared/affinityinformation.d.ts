import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A locality hint that can be used by the Batch service to select a compute node on which to start a task.
 */
export declare class AffinityInformation extends SpeakeasyBase {
    /**
     * An opaque string representing the location of a compute node or a task that has run previously. You can pass the AffinityId of a compute node or task to indicate that this task needs to be placed close to the node or task.
     */
    affinityId?: string;
}
