import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetSubscribedNotificationEventsEventNameEnum {
    Refresh = "REFRESH",
    DataUpdates = "DATA_UPDATES",
    AutoRefreshUpdates = "AUTO_REFRESH_UPDATES"
}
export declare class GetSubscribedNotificationEventsQueryParams extends SpeakeasyBase {
    eventName?: GetSubscribedNotificationEventsEventNameEnum;
}
export declare class GetSubscribedNotificationEventsRequest extends SpeakeasyBase {
    queryParams: GetSubscribedNotificationEventsQueryParams;
}
export declare class GetSubscribedNotificationEventsResponse extends SpeakeasyBase {
    configsNotificationResponse?: shared.ConfigsNotificationResponse;
    contentType: string;
    statusCode: number;
}
