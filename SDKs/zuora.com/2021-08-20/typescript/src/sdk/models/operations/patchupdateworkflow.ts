import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatchUpdateWorkflowPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workflow_id" })
  workflowId: string;
}


export class PatchUpdateWorkflowHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;
}


export class PatchUpdateWorkflowRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=callout_trigger" })
  calloutTrigger?: boolean;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=interval" })
  interval?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=ondemand_trigger" })
  ondemandTrigger?: boolean;

  @SpeakeasyMetadata({ data: "json, name=priority" })
  priority?: string;

  @SpeakeasyMetadata({ data: "json, name=scheduled_trigger" })
  scheduledTrigger?: boolean;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=timezone" })
  timezone?: string;
}


export class PatchUpdateWorkflowRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchUpdateWorkflowPathParams;

  @SpeakeasyMetadata()
  headers: PatchUpdateWorkflowHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PatchUpdateWorkflowRequestBody;
}


export class PatchUpdateWorkflowResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deleteWorkflowError?: shared.DeleteWorkflowError;

  @SpeakeasyMetadata()
  getWorkflowSetupResponse?: shared.GetWorkflowSetupResponse;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  validationErrors?: shared.ValidationErrors;
}
