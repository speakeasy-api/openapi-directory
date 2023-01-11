import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetRevenueEventDetailsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=event-number" })
  eventNumber: string;
}


export class GetRevenueEventDetailsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class GetRevenueEventDetailsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRevenueEventDetailsPathParams;

  @SpeakeasyMetadata()
  headers: GetRevenueEventDetailsHeaders;
}


export class GetRevenueEventDetailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getRevenueEventDetailType?: Record<string, any>;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
