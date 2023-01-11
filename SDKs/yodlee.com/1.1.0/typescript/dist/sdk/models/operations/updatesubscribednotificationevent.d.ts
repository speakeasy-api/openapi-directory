import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateSubscribedNotificationEventEventNameEnum {
    Refresh = "REFRESH",
    DataUpdates = "DATA_UPDATES",
    AutoRefreshUpdates = "AUTO_REFRESH_UPDATES"
}
export declare class UpdateSubscribedNotificationEventPathParams extends SpeakeasyBase {
    eventName: UpdateSubscribedNotificationEventEventNameEnum;
}
export declare class UpdateSubscribedNotificationEventRequest extends SpeakeasyBase {
    pathParams: UpdateSubscribedNotificationEventPathParams;
    request: shared.UpdateConfigsNotificationEventRequest;
}
export declare class UpdateSubscribedNotificationEventResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    yodleeError?: shared.YodleeError;
}
