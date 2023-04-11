import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetInvestmentProductSecurity extends SpeakeasyBase {
    apiSecretKey: string;
}
/**
 * Investment Product Category Id
 */
export declare enum GetInvestmentProductCategoryIDEnum {
    Funds = "funds"
}
export declare class GetInvestmentProductRequest extends SpeakeasyBase {
    /**
     * Investment Product Category Id
     */
    categoryId: GetInvestmentProductCategoryIDEnum;
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
export declare class GetInvestmentProduct500ApplicationJSON extends SpeakeasyBase {
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
export declare class GetInvestmentProduct429ApplicationJSON extends SpeakeasyBase {
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
export declare class GetInvestmentProduct404ApplicationJSON extends SpeakeasyBase {
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
export declare class GetInvestmentProduct403ApplicationJSON extends SpeakeasyBase {
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
export declare class GetInvestmentProduct401ApplicationJSON extends SpeakeasyBase {
    /**
     * Optional error code
     */
    errorCode?: string;
    /**
     * Human readable description of the error
     */
    message: string;
}
export declare enum GetInvestmentProduct200ApplicationJSONApplicableFinancialProductsEnum {
    Gia = "gia",
    Isa = "isa"
}
/**
 * Category of the investment product
 */
export declare enum GetInvestmentProduct200ApplicationJSONAssetTypeEnum {
    Funds = "funds"
}
/**
 * The type of id that is populated as investment_product_id
 */
export declare enum GetInvestmentProduct200ApplicationJSONIdTypeEnum {
    Isin = "ISIN",
    Cusip = "CUSIP",
    FundServID = "FundServID"
}
/**
 * Status of the investment product
 */
export declare enum GetInvestmentProduct200ApplicationJSONStatusEnum {
    Active = "active",
    Inactive = "inactive"
}
/**
 * success
 */
export declare class GetInvestmentProduct200ApplicationJSON extends SpeakeasyBase {
    /**
     * Supplies additional custom information of an investment product
     */
    additionalProviderDetails: Record<string, any>;
    /**
     * Financial products this investment product is applicable for
     */
    applicableFinancialProducts?: GetInvestmentProduct200ApplicationJSONApplicableFinancialProductsEnum[];
    /**
     * Sub-category of the investment product
     */
    assetSubType?: string;
    /**
     * Category of the investment product
     */
    assetType: GetInvestmentProduct200ApplicationJSONAssetTypeEnum;
    /**
     * The final price for the day of the investment product
     */
    closePrice?: string;
    /**
     * Exact day the close_price was recorded for the investment product
     */
    closePriceOnDate?: string;
    createdAt?: Date;
    /**
     * currency of the investment product in ISO 4217 format
     */
    currency?: string;
    /**
     * Sub-type of investment product. Relevant for investment products of type fund only
     */
    fundAssetType?: string;
    /**
     * Fund code identifier. Relevant for investment products of type fund
     */
    fundCode?: string;
    /**
     * The type of id that is populated as investment_product_id
     */
    idType: GetInvestmentProduct200ApplicationJSONIdTypeEnum;
    /**
     * Unique identifier of an investment product
     */
    investmentProductId: string;
    /**
     * Investment product name
     */
    name?: string;
    /**
     * Method used to calculate the investment product price
     */
    pricingMethod: string;
    /**
     * settlement date offset of investment product
     */
    settlementDateOffset?: number;
    /**
     * Status of the investment product
     */
    status?: GetInvestmentProduct200ApplicationJSONStatusEnum;
    updatedAt?: Date;
}
export declare class GetInvestmentProductResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * success
     */
    getInvestmentProduct200ApplicationJSONObject?: GetInvestmentProduct200ApplicationJSON;
    /**
     * You do not have permissions to access this resource.
     */
    getInvestmentProduct401ApplicationJSONObject?: GetInvestmentProduct401ApplicationJSON;
    /**
     * Your authentication information is missing or invalid. Please check the keys are properly set and its correct
     */
    getInvestmentProduct403ApplicationJSONObject?: GetInvestmentProduct403ApplicationJSON;
    /**
     * The specified resource was not found
     */
    getInvestmentProduct404ApplicationJSONObject?: GetInvestmentProduct404ApplicationJSON;
    /**
     * You have sent too many requests to the system. Please retry later. If you need to increase your throtteling limits, please contact WOS support
     */
    getInvestmentProduct429ApplicationJSONObject?: GetInvestmentProduct429ApplicationJSON;
    /**
     * System error. Retry later. If the error persist, contact WOS support
     */
    getInvestmentProduct500ApplicationJSONObject?: GetInvestmentProduct500ApplicationJSON;
}
