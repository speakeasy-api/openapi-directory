import { SpeakeasyBase } from "../../../internal/utils";
export declare enum LinkageLinkageTypeEnum {
    Start = "Start",
    Success = "Success",
    Failure = "Failure",
    Iterate = "Iterate",
    True = "true",
    False = "false",
    Approve = "Approve",
    Reject = "Reject"
}
/**
 * Used to represent the relationship between workflow tasks
 */
export declare class Linkage extends SpeakeasyBase {
    linkageType?: LinkageLinkageTypeEnum;
    /**
     * the task that spawned the target task
     */
    sourceTaskId?: number;
    /**
     * the workflow the target task is associated with
     */
    sourceWorkflowId?: number;
    /**
     * the task that the source task is linked to.
     */
    targetTaskId?: number;
}
