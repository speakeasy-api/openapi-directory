import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetConfiguredInvestmentProductsSecurity extends SpeakeasyBase {
    apiSecretKey: string;
}
/**
 * status of investment product. If empty will return all investment products.
 */
export declare enum GetConfiguredInvestmentProductsStatusEnum {
    Active = "active",
    Inactive = "inactive"
}
export declare class GetConfiguredInvestmentProductsRequest extends SpeakeasyBase {
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
    status?: GetConfiguredInvestmentProductsStatusEnum;
    /**
     * ApiSecretKey
     */
    xApiKey: string;
}
/**
 * System error. Retry later. If the error persist, contact WOS support
 */
export declare class GetConfiguredInvestmentProducts500ApplicationJSON extends SpeakeasyBase {
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
export declare class GetConfiguredInvestmentProducts429ApplicationJSON extends SpeakeasyBase {
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
export declare class GetConfiguredInvestmentProducts404ApplicationJSON extends SpeakeasyBase {
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
export declare class GetConfiguredInvestmentProducts403ApplicationJSON extends SpeakeasyBase {
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
export declare class GetConfiguredInvestmentProducts401ApplicationJSON extends SpeakeasyBase {
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
 * Category of the investment product
 */
export declare enum GetConfiguredInvestmentProducts200ApplicationJSONInvestmentProductsAssetTypeEnum {
    Funds = "funds"
}
/**
 * Status of the investment product
 */
export declare enum GetConfiguredInvestmentProducts200ApplicationJSONInvestmentProductsStatusEnum {
    Active = "active",
    Inactive = "inactive"
}
export declare class GetConfiguredInvestmentProducts200ApplicationJSONInvestmentProducts extends SpeakeasyBase {
    /**
     * Category of the investment product
     */
    assetType: GetConfiguredInvestmentProducts200ApplicationJSONInvestmentProductsAssetTypeEnum;
    createdAt?: Date;
    /**
     * Unique identifier of an investment product
     */
    investmentProductId: string;
    /**
     * Investment product name
     */
    name?: string;
    /**
     * Status of the investment product
     */
    status: GetConfiguredInvestmentProducts200ApplicationJSONInvestmentProductsStatusEnum;
    updatedAt?: Date;
}
/**
 * success
 */
export declare class GetConfiguredInvestmentProducts200ApplicationJSON extends SpeakeasyBase {
    investmentProducts: GetConfiguredInvestmentProducts200ApplicationJSONInvestmentProducts[];
    /**
     * This indicates the availability of the next page
     */
    nextPageAvailable: boolean;
}
export declare class GetConfiguredInvestmentProductsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * success
     */
    getConfiguredInvestmentProducts200ApplicationJSONObject?: GetConfiguredInvestmentProducts200ApplicationJSON;
    /**
     * You do not have permissions to access this resource.
     */
    getConfiguredInvestmentProducts401ApplicationJSONObject?: GetConfiguredInvestmentProducts401ApplicationJSON;
    /**
     * Your authentication information is missing or invalid. Please check the keys are properly set and its correct
     */
    getConfiguredInvestmentProducts403ApplicationJSONObject?: GetConfiguredInvestmentProducts403ApplicationJSON;
    /**
     * The specified resource was not found
     */
    getConfiguredInvestmentProducts404ApplicationJSONObject?: GetConfiguredInvestmentProducts404ApplicationJSON;
    /**
     * You have sent too many requests to the system. Please retry later. If you need to increase your throtteling limits, please contact WOS support
     */
    getConfiguredInvestmentProducts429ApplicationJSONObject?: GetConfiguredInvestmentProducts429ApplicationJSON;
    /**
     * System error. Retry later. If the error persist, contact WOS support
     */
    getConfiguredInvestmentProducts500ApplicationJSONObject?: GetConfiguredInvestmentProducts500ApplicationJSON;
}
