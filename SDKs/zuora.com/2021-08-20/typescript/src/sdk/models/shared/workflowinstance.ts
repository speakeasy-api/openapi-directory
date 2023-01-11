import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum WorkflowInstanceStatusEnum {
    Queued = "Queued",
    Processing = "Processing"
}


// WorkflowInstance
/** 
 * A instance workflow object.
**/
export class WorkflowInstance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=originalWorkflowId" })
  originalWorkflowId?: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: WorkflowInstanceStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=updatedAt" })
  updatedAt?: string;
}
