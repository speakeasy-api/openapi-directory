import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetSubscribedNotificationEventsEventNameEnum {
    Refresh = "REFRESH",
    DataUpdates = "DATA_UPDATES",
    AutoRefreshUpdates = "AUTO_REFRESH_UPDATES"
}


export class GetSubscribedNotificationEventsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=eventName" })
  eventName?: GetSubscribedNotificationEventsEventNameEnum;
}


export class GetSubscribedNotificationEventsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetSubscribedNotificationEventsQueryParams;
}


export class GetSubscribedNotificationEventsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  configsNotificationResponse?: shared.ConfigsNotificationResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
