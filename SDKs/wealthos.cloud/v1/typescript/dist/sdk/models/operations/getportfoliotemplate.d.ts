import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetPortfolioTemplateSecurity extends SpeakeasyBase {
    apiSecretKey: string;
}
export declare class GetPortfolioTemplateRequest extends SpeakeasyBase {
    /**
     * Portfolio ID
     */
    portfolioTemplateId: string;
    /**
     * ApiSecretKey
     */
    xApiKey: string;
}
/**
 * System error. Retry later. If the error persist, contact WOS support
 */
export declare class GetPortfolioTemplate500ApplicationJSON extends SpeakeasyBase {
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
export declare class GetPortfolioTemplate429ApplicationJSON extends SpeakeasyBase {
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
export declare class GetPortfolioTemplate404ApplicationJSON extends SpeakeasyBase {
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
export declare class GetPortfolioTemplate403ApplicationJSON extends SpeakeasyBase {
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
export declare class GetPortfolioTemplate401ApplicationJSON extends SpeakeasyBase {
    /**
     * Optional error code
     */
    errorCode?: string;
    /**
     * Human readable description of the error
     */
    message: string;
}
export declare class GetPortfolioTemplate200ApplicationJSONRatios extends SpeakeasyBase {
    /**
     * must be an investment product id or 'cash'
     */
    investmentProductId: string;
    /**
     * must be in correct pattern (eg: 25.00, 33.34, 50.25, 100.00)
     */
    ratio: string;
}
/**
 * success
 */
export declare class GetPortfolioTemplate200ApplicationJSON extends SpeakeasyBase {
    createdAt?: Date;
    owner?: string;
    portfolioName: string;
    /**
     * system generated id
     */
    portfolioTemplateId: string;
    ratios: GetPortfolioTemplate200ApplicationJSONRatios[];
    referenceVersion: number;
    updatedAt?: Date;
}
export declare class GetPortfolioTemplateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * success
     */
    getPortfolioTemplate200ApplicationJSONObject?: GetPortfolioTemplate200ApplicationJSON;
    /**
     * You do not have permissions to access this resource.
     */
    getPortfolioTemplate401ApplicationJSONObject?: GetPortfolioTemplate401ApplicationJSON;
    /**
     * Your authentication information is missing or invalid. Please check the keys are properly set and its correct
     */
    getPortfolioTemplate403ApplicationJSONObject?: GetPortfolioTemplate403ApplicationJSON;
    /**
     * The specified resource was not found
     */
    getPortfolioTemplate404ApplicationJSONObject?: GetPortfolioTemplate404ApplicationJSON;
    /**
     * You have sent too many requests to the system. Please retry later. If you need to increase your throtteling limits, please contact WOS support
     */
    getPortfolioTemplate429ApplicationJSONObject?: GetPortfolioTemplate429ApplicationJSON;
    /**
     * System error. Retry later. If the error persist, contact WOS support
     */
    getPortfolioTemplate500ApplicationJSONObject?: GetPortfolioTemplate500ApplicationJSON;
}
