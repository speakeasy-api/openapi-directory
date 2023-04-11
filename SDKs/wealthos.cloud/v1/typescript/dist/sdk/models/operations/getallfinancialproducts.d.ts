import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetAllFinancialProductsSecurity extends SpeakeasyBase {
    apiSecretKey: string;
}
export declare class GetAllFinancialProductsRequest extends SpeakeasyBase {
    /**
     * multiple product types as a comma seperated string
     */
    productTypes?: string;
    /**
     * ApiSecretKey
     */
    xApiKey: string;
}
/**
 * System error. Retry later. If the error persist, contact WOS support
 */
export declare class GetAllFinancialProducts500ApplicationJSON extends SpeakeasyBase {
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
export declare class GetAllFinancialProducts429ApplicationJSON extends SpeakeasyBase {
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
export declare class GetAllFinancialProducts404ApplicationJSON extends SpeakeasyBase {
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
export declare class GetAllFinancialProducts403ApplicationJSON extends SpeakeasyBase {
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
export declare class GetAllFinancialProducts401ApplicationJSON extends SpeakeasyBase {
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
 * Request is not complete and may have one or more validations errors. Please check the error message and the code
 */
export declare class GetAllFinancialProducts400ApplicationJSON extends SpeakeasyBase {
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
 * Whether the regulations allow a financial product to be flexible
 */
export declare enum GetAllFinancialProducts200ApplicationJSONRootTypeForFinancialProductsFlexibleEnum {
    Yes = "YES",
    No = "NO"
}
export declare class GetAllFinancialProducts200ApplicationJSONRootTypeForFinancialProductsInterestPreferences extends SpeakeasyBase {
    interestAccrualBasis?: string;
    interestPaymentFrequency?: string;
    payInterest?: string;
}
export declare class GetAllFinancialProducts200ApplicationJSONRootTypeForFinancialProductsInvestmentPreferences extends SpeakeasyBase {
    minimumOneOffInvestment?: string;
    minimumRegularMonthlyInvestment?: string;
    regularInvestmentDates?: string[];
    regularInvestmentFrequencies?: string[];
}
export declare class GetAllFinancialProducts200ApplicationJSONRootTypeForFinancialProductsWithdrawalPreferences extends SpeakeasyBase {
    minimumOneOffWithdrawal?: string;
    minimumRegularMonthlyWithdrawal?: string;
    regularWithdrawalFrequencies?: string[];
    regularWithdrawalPaymentDates?: string[];
}
export declare class GetAllFinancialProducts200ApplicationJSONRootTypeForFinancialProducts extends SpeakeasyBase {
    additionalCashCurrencies?: string[];
    availability?: string[];
    createdAt?: Date;
    dividendOptions?: string[];
    financialProductId: string;
    /**
     * Whether the regulations allow a financial product to be flexible
     */
    flexible?: GetAllFinancialProducts200ApplicationJSONRootTypeForFinancialProductsFlexibleEnum;
    interestPreferences?: GetAllFinancialProducts200ApplicationJSONRootTypeForFinancialProductsInterestPreferences;
    investmentPreferences?: GetAllFinancialProducts200ApplicationJSONRootTypeForFinancialProductsInvestmentPreferences;
    name: string;
    /**
     * Financial product type
     */
    productType: string;
    updatedAt?: Date;
    withdrawalPreferences?: GetAllFinancialProducts200ApplicationJSONRootTypeForFinancialProductsWithdrawalPreferences;
}
/**
 * A paged array of financial products
 */
export declare class GetAllFinancialProducts200ApplicationJSON extends SpeakeasyBase {
    financialProducts: GetAllFinancialProducts200ApplicationJSONRootTypeForFinancialProducts[];
}
export declare class GetAllFinancialProductsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A paged array of financial products
     */
    getAllFinancialProducts200ApplicationJSONObject?: GetAllFinancialProducts200ApplicationJSON;
    /**
     * Request is not complete and may have one or more validations errors. Please check the error message and the code
     */
    getAllFinancialProducts400ApplicationJSONObject?: GetAllFinancialProducts400ApplicationJSON;
    /**
     * You do not have permissions to access this resource.
     */
    getAllFinancialProducts401ApplicationJSONObject?: GetAllFinancialProducts401ApplicationJSON;
    /**
     * Your authentication information is missing or invalid. Please check the keys are properly set and its correct
     */
    getAllFinancialProducts403ApplicationJSONObject?: GetAllFinancialProducts403ApplicationJSON;
    /**
     * The specified resource was not found
     */
    getAllFinancialProducts404ApplicationJSONObject?: GetAllFinancialProducts404ApplicationJSON;
    /**
     * You have sent too many requests to the system. Please retry later. If you need to increase your throtteling limits, please contact WOS support
     */
    getAllFinancialProducts429ApplicationJSONObject?: GetAllFinancialProducts429ApplicationJSON;
    /**
     * System error. Retry later. If the error persist, contact WOS support
     */
    getAllFinancialProducts500ApplicationJSONObject?: GetAllFinancialProducts500ApplicationJSON;
}
