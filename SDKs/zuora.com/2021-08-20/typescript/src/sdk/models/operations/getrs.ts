import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetRsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=rs-number" })
  rsNumber: string;
}


export class GetRsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class GetRsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRsPathParams;

  @SpeakeasyMetadata()
  headers: GetRsHeaders;
}


export class GetRsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getrsDetailType?: Record<string, any>;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
