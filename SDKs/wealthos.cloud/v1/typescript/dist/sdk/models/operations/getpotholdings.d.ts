import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPotHoldingsPathParams extends SpeakeasyBase {
    potId: string;
}
export declare class GetPotHoldingsHeaders extends SpeakeasyBase {
    xApiKey: string;
}
export declare class GetPotHoldingsSecurity extends SpeakeasyBase {
    apiSecretKey: shared.SchemeApiSecretKey;
}
export declare class GetPotHoldingsRequest extends SpeakeasyBase {
    pathParams: GetPotHoldingsPathParams;
    headers: GetPotHoldingsHeaders;
    security: GetPotHoldingsSecurity;
}
export declare class GetPotHoldingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getPotHoldings200ApplicationJSONAny?: any;
    getPotHoldings400ApplicationJSONAny?: any;
    getPotHoldings401ApplicationJSONAny?: any;
    getPotHoldings403ApplicationJSONAny?: any;
    getPotHoldings404ApplicationJSONAny?: any;
    getPotHoldings429ApplicationJSONAny?: any;
    getPotHoldings500ApplicationJSONAny?: any;
}
