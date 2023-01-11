import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum DeleteSubscribedNotificationEventEventNameEnum {
    Refresh = "REFRESH",
    DataUpdates = "DATA_UPDATES",
    AutoRefreshUpdates = "AUTO_REFRESH_UPDATES"
}


export class DeleteSubscribedNotificationEventPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=eventName" })
  eventName: DeleteSubscribedNotificationEventEventNameEnum;
}


export class DeleteSubscribedNotificationEventRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteSubscribedNotificationEventPathParams;
}


export class DeleteSubscribedNotificationEventResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  yodleeError?: shared.YodleeError;
}
