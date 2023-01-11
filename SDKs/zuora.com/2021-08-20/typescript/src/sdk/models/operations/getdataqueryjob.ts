import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDataQueryJobPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=job-id" })
  jobId: string;
}


export class GetDataQueryJobHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class GetDataQueryJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDataQueryJobPathParams;

  @SpeakeasyMetadata()
  headers: GetDataQueryJobHeaders;
}


export class GetDataQueryJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  dataQueryErrorResponse?: shared.DataQueryErrorResponse;

  @SpeakeasyMetadata()
  getDataQueryJobResponse?: shared.GetDataQueryJobResponse;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
