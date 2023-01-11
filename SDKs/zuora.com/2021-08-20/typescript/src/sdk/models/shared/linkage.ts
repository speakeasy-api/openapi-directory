import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum LinkageLinkageTypeEnum {
    Start = "Start",
    Success = "Success",
    Failure = "Failure",
    Iterate = "Iterate",
    True = "true",
    False = "false",
    Approve = "Approve",
    Reject = "Reject"
}


// Linkage
/** 
 * Used to represent the relationship between workflow tasks
**/
export class Linkage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=linkage_type" })
  linkageType?: LinkageLinkageTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=source_task_id" })
  sourceTaskId?: number;

  @SpeakeasyMetadata({ data: "json, name=source_workflow_id" })
  sourceWorkflowId?: number;

  @SpeakeasyMetadata({ data: "json, name=target_task_id" })
  targetTaskId?: number;
}
