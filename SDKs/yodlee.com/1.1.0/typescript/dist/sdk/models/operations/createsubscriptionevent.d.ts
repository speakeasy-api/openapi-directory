import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateSubscriptionEventEventNameEnum {
    Refresh = "REFRESH",
    DataUpdates = "DATA_UPDATES",
    AutoRefreshUpdates = "AUTO_REFRESH_UPDATES"
}
export declare class CreateSubscriptionEventPathParams extends SpeakeasyBase {
    eventName: CreateSubscriptionEventEventNameEnum;
}
export declare class CreateSubscriptionEventRequest extends SpeakeasyBase {
    pathParams: CreateSubscriptionEventPathParams;
    request: shared.CreateCobrandNotificationEventRequest;
}
export declare class CreateSubscriptionEventResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    yodleeError?: shared.YodleeError;
}
