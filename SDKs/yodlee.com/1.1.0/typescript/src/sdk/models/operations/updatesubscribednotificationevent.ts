import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum UpdateSubscribedNotificationEventEventNameEnum {
    Refresh = "REFRESH",
    DataUpdates = "DATA_UPDATES",
    AutoRefreshUpdates = "AUTO_REFRESH_UPDATES"
}


export class UpdateSubscribedNotificationEventPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=eventName" })
  eventName: UpdateSubscribedNotificationEventEventNameEnum;
}


export class UpdateSubscribedNotificationEventRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateSubscribedNotificationEventPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.UpdateConfigsNotificationEventRequest;
}


export class UpdateSubscribedNotificationEventResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  yodleeError?: shared.YodleeError;
}
