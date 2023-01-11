import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetWorkflowResponseStatusEnum {
    Queued = "Queued",
    Processing = "Processing",
    Stopping = "Stopping",
    Stopped = "Stopped",
    Finished = "Finished"
}


// GetWorkflowResponseTasks
/** 
 * An object containing task counts.
 * 
**/
export class GetWorkflowResponseTasks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: number;

  @SpeakeasyMetadata({ data: "json, name=pending" })
  pending?: number;

  @SpeakeasyMetadata({ data: "json, name=processing" })
  processing?: number;

  @SpeakeasyMetadata({ data: "json, name=queued" })
  queued?: number;

  @SpeakeasyMetadata({ data: "json, name=stopped" })
  stopped?: number;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: number;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}


export class GetWorkflowResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cpuTime" })
  cpuTime?: string;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=finishedAt" })
  finishedAt?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=messages" })
  messages?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=originalWorkflowId" })
  originalWorkflowId?: string;

  @SpeakeasyMetadata({ data: "json, name=runTime" })
  runTime?: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: GetWorkflowResponseStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=tasks" })
  tasks?: GetWorkflowResponseTasks;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=updatedAt" })
  updatedAt?: string;
}
