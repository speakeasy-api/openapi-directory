import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteSubscribedNotificationEventEventNameEnum {
    Refresh = "REFRESH",
    DataUpdates = "DATA_UPDATES",
    AutoRefreshUpdates = "AUTO_REFRESH_UPDATES"
}
export declare class DeleteSubscribedNotificationEventPathParams extends SpeakeasyBase {
    eventName: DeleteSubscribedNotificationEventEventNameEnum;
}
export declare class DeleteSubscribedNotificationEventRequest extends SpeakeasyBase {
    pathParams: DeleteSubscribedNotificationEventPathParams;
}
export declare class DeleteSubscribedNotificationEventResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    yodleeError?: shared.YodleeError;
}
