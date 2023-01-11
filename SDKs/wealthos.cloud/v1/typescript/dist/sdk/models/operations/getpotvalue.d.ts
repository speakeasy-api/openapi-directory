import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPotValuePathParams extends SpeakeasyBase {
    potId: string;
}
export declare class GetPotValueHeaders extends SpeakeasyBase {
    xApiKey: string;
}
export declare class GetPotValueSecurity extends SpeakeasyBase {
    apiSecretKey: shared.SchemeApiSecretKey;
}
export declare class GetPotValueRequest extends SpeakeasyBase {
    pathParams: GetPotValuePathParams;
    headers: GetPotValueHeaders;
    security: GetPotValueSecurity;
}
export declare class GetPotValueResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getPotValue200ApplicationJSONAny?: any;
    getPotValue400ApplicationJSONAny?: any;
    getPotValue401ApplicationJSONAny?: any;
    getPotValue403ApplicationJSONAny?: any;
    getPotValue404ApplicationJSONAny?: any;
    getPotValue429ApplicationJSONAny?: any;
    getPotValue500ApplicationJSONAny?: any;
}
