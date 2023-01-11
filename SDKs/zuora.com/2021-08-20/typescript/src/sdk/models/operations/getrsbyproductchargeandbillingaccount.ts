import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRSbyProductChargeAndBillingAccountPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=account-key" })
  accountKey: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=charge-key" })
  chargeKey: string;
}


export class GetRSbyProductChargeAndBillingAccountQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;
}


export class GetRSbyProductChargeAndBillingAccountHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class GetRSbyProductChargeAndBillingAccountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRSbyProductChargeAndBillingAccountPathParams;

  @SpeakeasyMetadata()
  queryParams: GetRSbyProductChargeAndBillingAccountQueryParams;

  @SpeakeasyMetadata()
  headers: GetRSbyProductChargeAndBillingAccountHeaders;
}


export class GetRSbyProductChargeAndBillingAccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getrsDetailsByProductChargeType?: shared.GetrsDetailsByProductChargeType;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
