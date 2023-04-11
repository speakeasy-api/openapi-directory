import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Gets or sets how tasks should be distributed across compute nodes
 */
export declare enum TaskSchedulingPolicyNodeFillTypeEnum {
    Spread = "spread",
    Pack = "pack",
    Unmapped = "unmapped"
}
/**
 * Specifies how tasks should be distributed across compute nodes.
 */
export declare class TaskSchedulingPolicy extends SpeakeasyBase {
    /**
     * Gets or sets how tasks should be distributed across compute nodes
     */
    nodeFillType: TaskSchedulingPolicyNodeFillTypeEnum;
}
