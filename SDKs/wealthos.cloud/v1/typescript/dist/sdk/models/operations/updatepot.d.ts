import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdatePotPathParams extends SpeakeasyBase {
    potId: string;
}
export declare class UpdatePotHeaders extends SpeakeasyBase {
    xApiKey: string;
}
export declare class UpdatePotSecurity extends SpeakeasyBase {
    apiSecretKey: shared.SchemeApiSecretKey;
}
export declare class UpdatePotRequest extends SpeakeasyBase {
    pathParams: UpdatePotPathParams;
    headers: UpdatePotHeaders;
    request: any;
    security: UpdatePotSecurity;
}
export declare class UpdatePotResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updatePot200ApplicationJSONAny?: any;
    updatePot400ApplicationJSONAny?: any;
    updatePot401ApplicationJSONAny?: any;
    updatePot403ApplicationJSONAny?: any;
    updatePot404ApplicationJSONAny?: any;
    updatePot409ApplicationJSONAny?: any;
    updatePot429ApplicationJSONAny?: any;
    updatePot500ApplicationJSONAny?: any;
}
