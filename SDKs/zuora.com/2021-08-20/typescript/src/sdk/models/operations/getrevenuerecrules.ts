import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRevenueRecRulesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=charge-key" })
  chargeKey: string;
}


export class GetRevenueRecRulesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class GetRevenueRecRulesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRevenueRecRulesPathParams;

  @SpeakeasyMetadata()
  headers: GetRevenueRecRulesHeaders;
}


export class GetRevenueRecRulesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getRevenueRecognitionRuleAssociationType?: shared.GetRevenueRecognitionRuleAssociationType;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
