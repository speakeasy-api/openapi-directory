import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetConfiguredInvestmentProductPricesSecurity extends SpeakeasyBase {
    apiSecretKey: string;
}
/**
 * status of investment product. If empty will return all investment products.
 */
export declare enum GetConfiguredInvestmentProductPricesStatusEnum {
    Active = "active",
    Inactive = "inactive"
}
export declare class GetConfiguredInvestmentProductPricesRequest extends SpeakeasyBase {
    /**
     * Page number for the query. This end-point has paginations capabilities. This value should be a positive integer value. If this is not provided, both page_size and page_number will be defaulted to 1000 and 1. Results are sorted decending order of the created date & time.
     */
    pageNumber?: string;
    /**
     * Page size for the query. This end-point has paginations capabilities. This value should be a positive integer value. If this is not provided, both page_size and page_number will be defaulted to 1000 and 1. Results are sorted decending order of the created date & time.
     */
    pageSize?: string;
    /**
     * status of investment product. If empty will return all investment products.
     */
    status?: GetConfiguredInvestmentProductPricesStatusEnum;
    /**
     * ApiSecretKey
     */
    xApiKey: string;
}
/**
 * System error. Retry later. If the error persist, contact WOS support
 */
export declare class GetConfiguredInvestmentProductPrices500ApplicationJSON extends SpeakeasyBase {
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
export declare class GetConfiguredInvestmentProductPrices429ApplicationJSON extends SpeakeasyBase {
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
export declare class GetConfiguredInvestmentProductPrices404ApplicationJSON extends SpeakeasyBase {
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
export declare class GetConfiguredInvestmentProductPrices403ApplicationJSON extends SpeakeasyBase {
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
export declare class GetConfiguredInvestmentProductPrices401ApplicationJSON extends SpeakeasyBase {
    /**
     * Optional error code
     */
    errorCode?: string;
    /**
     * Human readable description of the error
     */
    message: string;
}
export declare class GetConfiguredInvestmentProductPrices200ApplicationJSONInvestmentProductUnitPrices extends SpeakeasyBase {
    /**
     * Currency of the current price
     */
    currency?: string;
    /**
     * Numeral string with two decimal point precision
     */
    currentPrice?: string;
    investmentProductId?: string;
    priceOnDate?: Date;
}
/**
 * success
 */
export declare class GetConfiguredInvestmentProductPrices200ApplicationJSON extends SpeakeasyBase {
    investmentProductUnitPrices: GetConfiguredInvestmentProductPrices200ApplicationJSONInvestmentProductUnitPrices[];
    /**
     * This indicates the availability of the next page
     */
    nextPageAvailable: boolean;
}
export declare class GetConfiguredInvestmentProductPricesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * success
     */
    getConfiguredInvestmentProductPrices200ApplicationJSONObject?: GetConfiguredInvestmentProductPrices200ApplicationJSON;
    /**
     * You do not have permissions to access this resource.
     */
    getConfiguredInvestmentProductPrices401ApplicationJSONObject?: GetConfiguredInvestmentProductPrices401ApplicationJSON;
    /**
     * Your authentication information is missing or invalid. Please check the keys are properly set and its correct
     */
    getConfiguredInvestmentProductPrices403ApplicationJSONObject?: GetConfiguredInvestmentProductPrices403ApplicationJSON;
    /**
     * The specified resource was not found
     */
    getConfiguredInvestmentProductPrices404ApplicationJSONObject?: GetConfiguredInvestmentProductPrices404ApplicationJSON;
    /**
     * You have sent too many requests to the system. Please retry later. If you need to increase your throtteling limits, please contact WOS support
     */
    getConfiguredInvestmentProductPrices429ApplicationJSONObject?: GetConfiguredInvestmentProductPrices429ApplicationJSON;
    /**
     * System error. Retry later. If the error persist, contact WOS support
     */
    getConfiguredInvestmentProductPrices500ApplicationJSONObject?: GetConfiguredInvestmentProductPrices500ApplicationJSON;
}
