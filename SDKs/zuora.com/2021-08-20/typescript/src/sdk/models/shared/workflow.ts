import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum WorkflowTypeEnum {
    WorkflowSetup = "Workflow::Setup",
    WorkflowInstance = "Workflow::Instance"
}


// Workflow
/** 
 * A workflow.
 * 
**/
export class Workflow extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=calloutTrigger" })
  calloutTrigger?: boolean;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=interval" })
  interval?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=ondemandTrigger" })
  ondemandTrigger?: boolean;

  @SpeakeasyMetadata({ data: "json, name=scheduledTrigger" })
  scheduledTrigger?: boolean;

  @SpeakeasyMetadata({ data: "json, name=timezone" })
  timezone?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: WorkflowTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=updatedAt" })
  updatedAt?: string;
}
