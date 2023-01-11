import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutRsBasicInfoPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=rs-number" })
  rsNumber: string;
}


export class PutRsBasicInfoHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class PutRsBasicInfoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutRsBasicInfoPathParams;

  @SpeakeasyMetadata()
  headers: PutRsBasicInfoHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: Record<string, any>;
}


export class PutRsBasicInfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  commonResponseType?: shared.CommonResponseType;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
