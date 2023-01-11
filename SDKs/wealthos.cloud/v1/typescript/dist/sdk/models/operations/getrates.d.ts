import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetRatesRateTypeEnum {
    FxSpot = "fx-spot"
}
export declare class GetRatesPathParams extends SpeakeasyBase {
    rateType: GetRatesRateTypeEnum;
}
export declare class GetRatesHeaders extends SpeakeasyBase {
    xApiKey: string;
}
export declare class GetRatesSecurity extends SpeakeasyBase {
    apiSecretKey: shared.SchemeApiSecretKey;
}
export declare class GetRates200ApplicationJson extends SpeakeasyBase {
    rates: any[];
}
export declare class GetRatesRequest extends SpeakeasyBase {
    pathParams: GetRatesPathParams;
    headers: GetRatesHeaders;
    security: GetRatesSecurity;
}
export declare class GetRatesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getRates200ApplicationJSONObject?: GetRates200ApplicationJson;
    getRates401ApplicationJSONAny?: any;
    getRates403ApplicationJSONAny?: any;
    getRates404ApplicationJSONAny?: any;
    getRates429ApplicationJSONAny?: any;
    getRates500ApplicationJSONAny?: any;
}
