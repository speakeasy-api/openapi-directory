import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetSubscribedEventsEventNameEnum {
    Refresh = "REFRESH",
    DataUpdates = "DATA_UPDATES",
    AutoRefreshUpdates = "AUTO_REFRESH_UPDATES"
}
export declare class GetSubscribedEventsQueryParams extends SpeakeasyBase {
    eventName?: GetSubscribedEventsEventNameEnum;
}
export declare class GetSubscribedEventsRequest extends SpeakeasyBase {
    queryParams: GetSubscribedEventsQueryParams;
}
export declare class GetSubscribedEventsResponse extends SpeakeasyBase {
    cobrandNotificationResponse?: shared.CobrandNotificationResponse;
    contentType: string;
    statusCode: number;
}
