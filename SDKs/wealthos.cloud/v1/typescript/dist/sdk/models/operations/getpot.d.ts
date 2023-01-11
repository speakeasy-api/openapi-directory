import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPotPathParams extends SpeakeasyBase {
    potId: string;
}
export declare class GetPotHeaders extends SpeakeasyBase {
    xApiKey: string;
}
export declare class GetPotSecurity extends SpeakeasyBase {
    apiSecretKey: shared.SchemeApiSecretKey;
}
export declare class GetPotRequest extends SpeakeasyBase {
    pathParams: GetPotPathParams;
    headers: GetPotHeaders;
    security: GetPotSecurity;
}
export declare class GetPotResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getPot200ApplicationJSONAny?: any;
    getPot401ApplicationJSONAny?: any;
    getPot403ApplicationJSONAny?: any;
    getPot404ApplicationJSONAny?: any;
    getPot429ApplicationJSONAny?: any;
    getPot500ApplicationJSONAny?: any;
}
