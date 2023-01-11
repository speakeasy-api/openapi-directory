import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreatePotHeaders extends SpeakeasyBase {
    xApiKey: string;
}
export declare class CreatePotSecurity extends SpeakeasyBase {
    apiSecretKey: shared.SchemeApiSecretKey;
}
export declare class CreatePotRequest extends SpeakeasyBase {
    headers: CreatePotHeaders;
    request?: any;
    security: CreatePotSecurity;
}
export declare class CreatePotResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createPot201ApplicationJSONAny?: any;
    createPot400ApplicationJSONAny?: any;
    createPot401ApplicationJSONAny?: any;
    createPot403ApplicationJSONAny?: any;
    createPot409ApplicationJSONAny?: any;
    createPot429ApplicationJSONAny?: any;
    createPot500ApplicationJSONAny?: any;
}
