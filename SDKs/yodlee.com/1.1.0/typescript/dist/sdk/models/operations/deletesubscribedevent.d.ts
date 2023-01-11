import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteSubscribedEventEventNameEnum {
    Refresh = "REFRESH",
    DataUpdates = "DATA_UPDATES",
    AutoRefreshUpdates = "AUTO_REFRESH_UPDATES"
}
export declare class DeleteSubscribedEventPathParams extends SpeakeasyBase {
    eventName: DeleteSubscribedEventEventNameEnum;
}
export declare class DeleteSubscribedEventRequest extends SpeakeasyBase {
    pathParams: DeleteSubscribedEventPathParams;
}
export declare class DeleteSubscribedEventResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    yodleeError?: shared.YodleeError;
}
