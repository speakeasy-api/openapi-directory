import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetSubscribedEventsEventNameEnum {
    Refresh = "REFRESH",
    DataUpdates = "DATA_UPDATES",
    AutoRefreshUpdates = "AUTO_REFRESH_UPDATES"
}


export class GetSubscribedEventsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=eventName" })
  eventName?: GetSubscribedEventsEventNameEnum;
}


export class GetSubscribedEventsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetSubscribedEventsQueryParams;
}


export class GetSubscribedEventsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cobrandNotificationResponse?: shared.CobrandNotificationResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
