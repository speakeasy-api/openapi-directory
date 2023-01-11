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
**/
export declare class Linkage extends SpeakeasyBase {
    linkageType?: LinkageLinkageTypeEnum;
    sourceTaskId?: number;
    sourceWorkflowId?: number;
    targetTaskId?: number;
}
