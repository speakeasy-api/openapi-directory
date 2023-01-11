import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRebalanceDetailsPathParams extends SpeakeasyBase {
    rebalanceRequestId: string;
}
export declare class GetRebalanceDetailsHeaders extends SpeakeasyBase {
    xApiKey: string;
}
export declare class GetRebalanceDetailsSecurity extends SpeakeasyBase {
    apiSecretKey: shared.SchemeApiSecretKey;
}
export declare class GetRebalanceDetailsRequest extends SpeakeasyBase {
    pathParams: GetRebalanceDetailsPathParams;
    headers: GetRebalanceDetailsHeaders;
    security: GetRebalanceDetailsSecurity;
}
export declare class GetRebalanceDetailsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getRebalanceDetails200ApplicationJSONAny?: any;
    getRebalanceDetails400ApplicationJSONAny?: any;
    getRebalanceDetails401ApplicationJSONAny?: any;
    getRebalanceDetails403ApplicationJSONAny?: any;
    getRebalanceDetails404ApplicationJSONAny?: any;
    getRebalanceDetails409ApplicationJSONAny?: any;
    getRebalanceDetails429ApplicationJSONAny?: any;
    getRebalanceDetails500ApplicationJSONAny?: any;
}
