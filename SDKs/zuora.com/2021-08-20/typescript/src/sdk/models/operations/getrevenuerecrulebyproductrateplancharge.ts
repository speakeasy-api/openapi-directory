import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRevenueRecRulebyProductRatePlanChargePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=charge-key" })
  chargeKey: string;
}


export class GetRevenueRecRulebyProductRatePlanChargeHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class GetRevenueRecRulebyProductRatePlanChargeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRevenueRecRulebyProductRatePlanChargePathParams;

  @SpeakeasyMetadata()
  headers: GetRevenueRecRulebyProductRatePlanChargeHeaders;
}


export class GetRevenueRecRulebyProductRatePlanChargeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getRevenueRecognitionRuleAssociationType?: shared.GetRevenueRecognitionRuleAssociationType;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
