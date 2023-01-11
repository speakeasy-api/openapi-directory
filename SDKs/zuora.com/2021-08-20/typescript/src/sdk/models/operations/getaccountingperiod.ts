import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAccountingPeriodPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ap-id" })
  apId: string;
}


export class GetAccountingPeriodHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class GetAccountingPeriodRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAccountingPeriodPathParams;

  @SpeakeasyMetadata()
  headers: GetAccountingPeriodHeaders;
}


export class GetAccountingPeriodResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getAccountingPeriodType?: Record<string, any>;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
