import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetRatesSecurity extends SpeakeasyBase {
    apiSecretKey: string;
}
/**
 * Type of Rate
 */
export declare enum GetRatesRateTypeEnum {
    FxSpot = "fx-spot"
}
export declare class GetRatesRequest extends SpeakeasyBase {
    /**
     * Type of Rate
     */
    rateType: GetRatesRateTypeEnum;
    /**
     * ApiSecretKey
     */
    xApiKey: string;
}
/**
 * System error. Retry later. If the error persist, contact WOS support
 */
export declare class GetRates500ApplicationJSON extends SpeakeasyBase {
    /**
     * Optional error code
     */
    errorCode?: string;
    /**
     * Human readable description of the error
     */
    message: string;
}
/**
 * You have sent too many requests to the system. Please retry later. If you need to increase your throtteling limits, please contact WOS support
 */
export declare class GetRates429ApplicationJSON extends SpeakeasyBase {
    /**
     * Optional error code
     */
    errorCode?: string;
    /**
     * Human readable description of the error
     */
    message: string;
}
/**
 * The specified resource was not found
 */
export declare class GetRates404ApplicationJSON extends SpeakeasyBase {
    /**
     * Optional error code
     */
    errorCode?: string;
    /**
     * Human readable description of the error
     */
    message: string;
}
/**
 * Your authentication information is missing or invalid. Please check the keys are properly set and its correct
 */
export declare class GetRates403ApplicationJSON extends SpeakeasyBase {
    /**
     * Optional error code
     */
    errorCode?: string;
    /**
     * Human readable description of the error
     */
    message: string;
}
/**
 * You do not have permissions to access this resource.
 */
export declare class GetRates401ApplicationJSON extends SpeakeasyBase {
    /**
     * Optional error code
     */
    errorCode?: string;
    /**
     * Human readable description of the error
     */
    message: string;
}
/**
 * Type of rate
 */
export declare enum GetRates200ApplicationJSONRatesRateTypeEnum {
    FxSpot = "fx-spot"
}
export declare class GetRates200ApplicationJSONRates extends SpeakeasyBase {
    /**
     * Latest available rate
     */
    rate: string;
    /**
     * Unique identifier of the rate
     */
    rateId: string;
    /**
     * Date and time of rate
     */
    rateOnDate?: string;
    /**
     * Type of rate
     */
    rateType: GetRates200ApplicationJSONRatesRateTypeEnum;
}
/**
 * success
 */
export declare class GetRates200ApplicationJSON extends SpeakeasyBase {
    rates: GetRates200ApplicationJSONRates[];
}
export declare class GetRatesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * success
     */
    getRates200ApplicationJSONObject?: GetRates200ApplicationJSON;
    /**
     * You do not have permissions to access this resource.
     */
    getRates401ApplicationJSONObject?: GetRates401ApplicationJSON;
    /**
     * Your authentication information is missing or invalid. Please check the keys are properly set and its correct
     */
    getRates403ApplicationJSONObject?: GetRates403ApplicationJSON;
    /**
     * The specified resource was not found
     */
    getRates404ApplicationJSONObject?: GetRates404ApplicationJSON;
    /**
     * You have sent too many requests to the system. Please retry later. If you need to increase your throtteling limits, please contact WOS support
     */
    getRates429ApplicationJSONObject?: GetRates429ApplicationJSON;
    /**
     * System error. Retry later. If the error persist, contact WOS support
     */
    getRates500ApplicationJSONObject?: GetRates500ApplicationJSON;
}
