import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateSubscribedEventEventNameEnum {
    Refresh = "REFRESH",
    DataUpdates = "DATA_UPDATES",
    AutoRefreshUpdates = "AUTO_REFRESH_UPDATES"
}
export declare class UpdateSubscribedEventPathParams extends SpeakeasyBase {
    eventName: UpdateSubscribedEventEventNameEnum;
}
export declare class UpdateSubscribedEventRequest extends SpeakeasyBase {
    pathParams: UpdateSubscribedEventPathParams;
    request: shared.UpdateCobrandNotificationEventRequest;
}
export declare class UpdateSubscribedEventResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    yodleeError?: shared.YodleeError;
}
