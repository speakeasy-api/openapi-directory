import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutUpdateSubscriptionCustomFieldsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subscriptionNumber" })
  subscriptionNumber: string;
}


export class PutUpdateSubscriptionCustomFieldsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class PutUpdateSubscriptionCustomFieldsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutUpdateSubscriptionCustomFieldsPathParams;

  @SpeakeasyMetadata()
  headers: PutUpdateSubscriptionCustomFieldsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.PutSubscriptionPatchRequestType;
}


export class PutUpdateSubscriptionCustomFieldsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  commonResponseType?: shared.CommonResponseType;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
