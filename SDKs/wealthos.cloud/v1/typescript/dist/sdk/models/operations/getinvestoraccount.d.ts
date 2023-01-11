import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetinvestorAccountPathParams extends SpeakeasyBase {
    accountId: string;
}
export declare class GetinvestorAccountHeaders extends SpeakeasyBase {
    xApiKey: string;
}
export declare class GetinvestorAccountSecurity extends SpeakeasyBase {
    apiSecretKey: shared.SchemeApiSecretKey;
}
export declare class GetinvestorAccountRequest extends SpeakeasyBase {
    pathParams: GetinvestorAccountPathParams;
    headers: GetinvestorAccountHeaders;
    security: GetinvestorAccountSecurity;
}
export declare class GetinvestorAccountResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getinvestorAccount200ApplicationJSONAny?: any;
    getinvestorAccount400ApplicationJSONAny?: any;
    getinvestorAccount401ApplicationJSONAny?: any;
    getinvestorAccount403ApplicationJSONAny?: any;
    getinvestorAccount404ApplicationJSONAny?: any;
    getinvestorAccount409ApplicationJSONAny?: any;
    getinvestorAccount429ApplicationJSONAny?: any;
    getinvestorAccount500ApplicationJSONAny?: any;
}
