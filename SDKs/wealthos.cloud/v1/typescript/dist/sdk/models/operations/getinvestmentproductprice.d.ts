import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetInvestmentProductPriceSecurity extends SpeakeasyBase {
    apiSecretKey: string;
}
/**
 * Investment Product Category Id
 */
export declare enum GetInvestmentProductPriceCategoryIDEnum {
    Funds = "funds"
}
export declare class GetInvestmentProductPriceRequest extends SpeakeasyBase {
    /**
     * Investment Product Category Id
     */
    categoryId: GetInvestmentProductPriceCategoryIDEnum;
    /**
     * Investment Product Id
     */
    investmentProductId: string;
    /**
     * ApiSecretKey
     */
    xApiKey: string;
}
/**
 * System error. Retry later. If the error persist, contact WOS support
 */
export declare class GetInvestmentProductPrice500ApplicationJSON extends SpeakeasyBase {
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
export declare class GetInvestmentProductPrice429ApplicationJSON extends SpeakeasyBase {
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
export declare class GetInvestmentProductPrice404ApplicationJSON extends SpeakeasyBase {
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
export declare class GetInvestmentProductPrice403ApplicationJSON extends SpeakeasyBase {
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
export declare class GetInvestmentProductPrice401ApplicationJSON extends SpeakeasyBase {
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
 * success
 */
export declare class GetInvestmentProductPrice200ApplicationJSON extends SpeakeasyBase {
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
export declare class GetInvestmentProductPriceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * success
     */
    getInvestmentProductPrice200ApplicationJSONObject?: GetInvestmentProductPrice200ApplicationJSON;
    /**
     * You do not have permissions to access this resource.
     */
    getInvestmentProductPrice401ApplicationJSONObject?: GetInvestmentProductPrice401ApplicationJSON;
    /**
     * Your authentication information is missing or invalid. Please check the keys are properly set and its correct
     */
    getInvestmentProductPrice403ApplicationJSONObject?: GetInvestmentProductPrice403ApplicationJSON;
    /**
     * The specified resource was not found
     */
    getInvestmentProductPrice404ApplicationJSONObject?: GetInvestmentProductPrice404ApplicationJSON;
    /**
     * You have sent too many requests to the system. Please retry later. If you need to increase your throtteling limits, please contact WOS support
     */
    getInvestmentProductPrice429ApplicationJSONObject?: GetInvestmentProductPrice429ApplicationJSON;
    /**
     * System error. Retry later. If the error persist, contact WOS support
     */
    getInvestmentProductPrice500ApplicationJSONObject?: GetInvestmentProductPrice500ApplicationJSON;
}
