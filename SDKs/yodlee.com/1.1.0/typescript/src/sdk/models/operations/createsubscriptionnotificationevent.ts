import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum CreateSubscriptionNotificationEventEventNameEnum {
    Refresh = "REFRESH",
    DataUpdates = "DATA_UPDATES",
    AutoRefreshUpdates = "AUTO_REFRESH_UPDATES"
}


export class CreateSubscriptionNotificationEventPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=eventName" })
  eventName: CreateSubscriptionNotificationEventEventNameEnum;
}


export class CreateSubscriptionNotificationEventRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateSubscriptionNotificationEventPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CreateConfigsNotificationEventRequest;
}


export class CreateSubscriptionNotificationEventResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  yodleeError?: shared.YodleeError;
}
