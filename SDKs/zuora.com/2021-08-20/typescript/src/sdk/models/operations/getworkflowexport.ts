import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetWorkflowExportPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workflow_id" })
  workflowId: number;
}


export class GetWorkflowExportHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class GetWorkflowExport200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=linkages", elemType: shared.Linkage })
  linkages?: shared.Linkage[];

  @SpeakeasyMetadata({ data: "json, name=tasks", elemType: shared.Task })
  tasks?: shared.Task[];

  @SpeakeasyMetadata({ data: "json, name=workflow" })
  workflow?: shared.Workflow;
}


export class GetWorkflowExportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetWorkflowExportPathParams;

  @SpeakeasyMetadata()
  headers: GetWorkflowExportHeaders;
}


export class GetWorkflowExportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getWorkflowExport200ApplicationJSONObject?: GetWorkflowExport200ApplicationJson;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
