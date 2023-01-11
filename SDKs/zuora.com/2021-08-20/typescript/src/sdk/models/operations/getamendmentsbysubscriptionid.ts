import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAmendmentsBySubscriptionIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subscription-id" })
  subscriptionId: string;
}


export class GetAmendmentsBySubscriptionIdHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class GetAmendmentsBySubscriptionIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAmendmentsBySubscriptionIdPathParams;

  @SpeakeasyMetadata()
  headers: GetAmendmentsBySubscriptionIdHeaders;
}


export class GetAmendmentsBySubscriptionIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getAmendmentType?: shared.GetAmendmentType;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
