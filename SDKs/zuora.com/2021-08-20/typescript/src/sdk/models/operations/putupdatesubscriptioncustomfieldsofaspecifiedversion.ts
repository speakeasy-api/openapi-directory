import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutUpdateSubscriptionCustomFieldsOfASpecifiedVersionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subscriptionNumber" })
  subscriptionNumber: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: string;
}


export class PutUpdateSubscriptionCustomFieldsOfASpecifiedVersionHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class PutUpdateSubscriptionCustomFieldsOfASpecifiedVersionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutUpdateSubscriptionCustomFieldsOfASpecifiedVersionPathParams;

  @SpeakeasyMetadata()
  headers: PutUpdateSubscriptionCustomFieldsOfASpecifiedVersionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.PutSubscriptionPatchRequestType;
}


export class PutUpdateSubscriptionCustomFieldsOfASpecifiedVersionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  commonResponseType?: shared.CommonResponseType;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
