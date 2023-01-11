import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPotsPathParams extends SpeakeasyBase {
    investorId: string;
}
export declare class GetPotsQueryParams extends SpeakeasyBase {
    financialProductId?: string;
}
export declare class GetPotsHeaders extends SpeakeasyBase {
    xApiKey: string;
}
export declare class GetPotsSecurity extends SpeakeasyBase {
    apiSecretKey: shared.SchemeApiSecretKey;
}
/**
 * Array of all active investment pots created by the investor
**/
export declare class GetPots200ApplicationJson extends SpeakeasyBase {
    pots: any[];
}
export declare class GetPotsRequest extends SpeakeasyBase {
    pathParams: GetPotsPathParams;
    queryParams: GetPotsQueryParams;
    headers: GetPotsHeaders;
    security: GetPotsSecurity;
}
export declare class GetPotsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getPots200ApplicationJSONObject?: GetPots200ApplicationJson;
    getPots400ApplicationJSONAny?: any;
    getPots401ApplicationJSONAny?: any;
    getPots403ApplicationJSONAny?: any;
    getPots404ApplicationJSONAny?: any;
    getPots429ApplicationJSONAny?: any;
    getPots500ApplicationJSONAny?: any;
}
