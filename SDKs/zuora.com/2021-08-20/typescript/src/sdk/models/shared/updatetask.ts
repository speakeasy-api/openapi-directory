import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum UpdateTaskStatusEnum {
    Queued = "Queued",
    Processing = "Processing",
    Pending = "Pending",
    Success = "Success",
    Stopped = "Stopped",
    Error = "Error"
}


// UpdateTask
/** 
 * A task.
 * 
**/
export class UpdateTask extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action_type" })
  actionType?: string;

  @SpeakeasyMetadata({ data: "json, name=call_type" })
  callType?: string;

  @SpeakeasyMetadata({ data: "json, name=concurrent_limit" })
  concurrentLimit?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=object" })
  object?: string;

  @SpeakeasyMetadata({ data: "json, name=object_id" })
  objectId?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: UpdateTaskStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=workflow_id" })
  workflowId?: number;
}
