import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCustomObjectBulkJobPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetCustomObjectBulkJobHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Version" })
  zuoraVersion?: Date;
}


export class GetCustomObjectBulkJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCustomObjectBulkJobPathParams;

  @SpeakeasyMetadata()
  headers: GetCustomObjectBulkJobHeaders;
}


export class GetCustomObjectBulkJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  commonErrorResponse?: shared.CommonErrorResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  customObjectBulkJobResponse?: shared.CustomObjectBulkJobResponse;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
