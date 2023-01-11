import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTotalPotValuePathParams extends SpeakeasyBase {
    investorId: string;
}
export declare class GetTotalPotValueHeaders extends SpeakeasyBase {
    xApiKey: string;
}
export declare class GetTotalPotValueSecurity extends SpeakeasyBase {
    apiSecretKey: shared.SchemeApiSecretKey;
}
export declare class GetTotalPotValueRequest extends SpeakeasyBase {
    pathParams: GetTotalPotValuePathParams;
    headers: GetTotalPotValueHeaders;
    security: GetTotalPotValueSecurity;
}
export declare class GetTotalPotValueResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getTotalPotValue200ApplicationJSONAny?: any;
    getTotalPotValue400ApplicationJSONAny?: any;
    getTotalPotValue401ApplicationJSONAny?: any;
    getTotalPotValue403ApplicationJSONAny?: any;
    getTotalPotValue404ApplicationJSONAny?: any;
    getTotalPotValue429ApplicationJSONAny?: any;
    getTotalPotValue500ApplicationJSONAny?: any;
}
