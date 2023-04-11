import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetAllPortfolioTemplatesSecurity extends SpeakeasyBase {
    apiSecretKey: string;
}
export declare class GetAllPortfolioTemplatesRequest extends SpeakeasyBase {
    /**
     * ApiSecretKey
     */
    xApiKey: string;
}
/**
 * System error. Retry later. If the error persist, contact WOS support
 */
export declare class GetAllPortfolioTemplates500ApplicationJSON extends SpeakeasyBase {
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
export declare class GetAllPortfolioTemplates429ApplicationJSON extends SpeakeasyBase {
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
export declare class GetAllPortfolioTemplates404ApplicationJSON extends SpeakeasyBase {
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
export declare class GetAllPortfolioTemplates403ApplicationJSON extends SpeakeasyBase {
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
export declare class GetAllPortfolioTemplates401ApplicationJSON extends SpeakeasyBase {
    /**
     * Optional error code
     */
    errorCode?: string;
    /**
     * Human readable description of the error
     */
    message: string;
}
export declare class GetAllPortfolioTemplates200ApplicationJSONPortfolioTemplatesRatios extends SpeakeasyBase {
    /**
     * must be an investment product id or 'cash'
     */
    investmentProductId: string;
    /**
     * must be in correct pattern (eg: 25.00, 33.34, 50.25, 100.00)
     */
    ratio: string;
}
export declare class GetAllPortfolioTemplates200ApplicationJSONPortfolioTemplates extends SpeakeasyBase {
    createdAt?: Date;
    owner?: string;
    portfolioName: string;
    /**
     * system generated id
     */
    portfolioTemplateId: string;
    ratios: GetAllPortfolioTemplates200ApplicationJSONPortfolioTemplatesRatios[];
    referenceVersion: number;
    updatedAt?: Date;
}
/**
 * Array of all portfolio templates applicable to the investor
 */
export declare class GetAllPortfolioTemplates200ApplicationJSON extends SpeakeasyBase {
    portfolioTemplates: GetAllPortfolioTemplates200ApplicationJSONPortfolioTemplates[];
}
export declare class GetAllPortfolioTemplatesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * success
     */
    getAllPortfolioTemplates200ApplicationJSONObject?: GetAllPortfolioTemplates200ApplicationJSON;
    /**
     * You do not have permissions to access this resource.
     */
    getAllPortfolioTemplates401ApplicationJSONObject?: GetAllPortfolioTemplates401ApplicationJSON;
    /**
     * Your authentication information is missing or invalid. Please check the keys are properly set and its correct
     */
    getAllPortfolioTemplates403ApplicationJSONObject?: GetAllPortfolioTemplates403ApplicationJSON;
    /**
     * The specified resource was not found
     */
    getAllPortfolioTemplates404ApplicationJSONObject?: GetAllPortfolioTemplates404ApplicationJSON;
    /**
     * You have sent too many requests to the system. Please retry later. If you need to increase your throtteling limits, please contact WOS support
     */
    getAllPortfolioTemplates429ApplicationJSONObject?: GetAllPortfolioTemplates429ApplicationJSON;
    /**
     * System error. Retry later. If the error persist, contact WOS support
     */
    getAllPortfolioTemplates500ApplicationJSONObject?: GetAllPortfolioTemplates500ApplicationJSON;
}
