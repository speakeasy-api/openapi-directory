import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSwitchPathParams extends SpeakeasyBase {
    switchTransactionId: string;
}
export declare class GetSwitchQueryParams extends SpeakeasyBase {
    includeDetails?: boolean;
}
export declare class GetSwitchHeaders extends SpeakeasyBase {
    xApiKey: string;
}
export declare class GetSwitchSecurity extends SpeakeasyBase {
    apiSecretKey: shared.SchemeApiSecretKey;
}
export declare class GetSwitchRequest extends SpeakeasyBase {
    pathParams: GetSwitchPathParams;
    queryParams: GetSwitchQueryParams;
    headers: GetSwitchHeaders;
    security: GetSwitchSecurity;
}
export declare class GetSwitchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getSwitch200ApplicationJSONAny?: any;
    getSwitch400ApplicationJSONAny?: any;
    getSwitch401ApplicationJSONAny?: any;
    getSwitch403ApplicationJSONAny?: any;
    getSwitch404ApplicationJSONAny?: any;
    getSwitch409ApplicationJSONAny?: any;
    getSwitch429ApplicationJSONAny?: any;
    getSwitch500ApplicationJSONAny?: any;
}
