import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostRunWorkflowPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workflow_id" })
  workflowId: number;
}


export class PostRunWorkflowHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class PostRunWorkflow400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.WorkflowError })
  errors?: shared.WorkflowError[];
}


export class PostRunWorkflow406ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.WorkflowError })
  errors?: shared.WorkflowError[];

  @SpeakeasyMetadata({ data: "json, name=parameters" })
  parameters?: any;
}


export class PostRunWorkflow409ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.WorkflowError })
  errors?: shared.WorkflowError[];
}


export class PostRunWorkflowRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostRunWorkflowPathParams;

  @SpeakeasyMetadata()
  headers: PostRunWorkflowHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: Record<string, any>;
}


export class PostRunWorkflowResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  postRunWorkflow400ApplicationJSONObject?: PostRunWorkflow400ApplicationJson;

  @SpeakeasyMetadata()
  postRunWorkflow406ApplicationJSONObject?: PostRunWorkflow406ApplicationJson;

  @SpeakeasyMetadata()
  postRunWorkflow409ApplicationJSONObject?: PostRunWorkflow409ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  workflowInstance?: shared.WorkflowInstance;
}
