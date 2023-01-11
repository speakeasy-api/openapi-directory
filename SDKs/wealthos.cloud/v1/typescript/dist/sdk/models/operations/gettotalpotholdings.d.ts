import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTotalPotHoldingsPathParams extends SpeakeasyBase {
    investorId: string;
}
export declare class GetTotalPotHoldingsHeaders extends SpeakeasyBase {
    xApiKey: string;
}
export declare class GetTotalPotHoldingsSecurity extends SpeakeasyBase {
    apiSecretKey: shared.SchemeApiSecretKey;
}
export declare class GetTotalPotHoldingsRequest extends SpeakeasyBase {
    pathParams: GetTotalPotHoldingsPathParams;
    headers: GetTotalPotHoldingsHeaders;
    security: GetTotalPotHoldingsSecurity;
}
export declare class GetTotalPotHoldingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getTotalPotHoldings200ApplicationJSONAny?: any;
    getTotalPotHoldings401ApplicationJSONAny?: any;
    getTotalPotHoldings403ApplicationJSONAny?: any;
    getTotalPotHoldings404ApplicationJSONAny?: any;
    getTotalPotHoldings429ApplicationJSONAny?: any;
    getTotalPotHoldings500ApplicationJSONAny?: any;
}
