import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostWorkflowImportHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class PostWorkflowImportRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=linkages", elemType: shared.Linkage })
  linkages?: shared.Linkage[];

  @SpeakeasyMetadata({ data: "json, name=tasks", elemType: shared.Task })
  tasks?: shared.Task[];

  @SpeakeasyMetadata({ data: "json, name=workflow" })
  workflow?: shared.Workflow;
}


export class PostWorkflowImportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostWorkflowImportHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostWorkflowImportRequestBody;
}


export class PostWorkflowImportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  workflow?: shared.Workflow;
}
