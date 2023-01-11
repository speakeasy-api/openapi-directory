import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateSubscriptionNotificationEventEventNameEnum {
    Refresh = "REFRESH",
    DataUpdates = "DATA_UPDATES",
    AutoRefreshUpdates = "AUTO_REFRESH_UPDATES"
}
export declare class CreateSubscriptionNotificationEventPathParams extends SpeakeasyBase {
    eventName: CreateSubscriptionNotificationEventEventNameEnum;
}
export declare class CreateSubscriptionNotificationEventRequest extends SpeakeasyBase {
    pathParams: CreateSubscriptionNotificationEventPathParams;
    request: shared.CreateConfigsNotificationEventRequest;
}
export declare class CreateSubscriptionNotificationEventResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    yodleeError?: shared.YodleeError;
}
