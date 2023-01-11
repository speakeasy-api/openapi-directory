import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteDataQueryJobPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=job-id" })
  jobId: string;
}


export class DeleteDataQueryJobHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class DeleteDataQueryJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteDataQueryJobPathParams;

  @SpeakeasyMetadata()
  headers: DeleteDataQueryJobHeaders;
}


export class DeleteDataQueryJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  dataQueryErrorResponse?: shared.DataQueryErrorResponse;

  @SpeakeasyMetadata()
  deleteDataQueryJobResponse?: shared.DeleteDataQueryJobResponse;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
