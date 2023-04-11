import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdatePortfolioTemplateSecurity extends SpeakeasyBase {
    apiSecretKey: string;
}
export declare class UpdatePortfolioTemplateRequestBodyRatios extends SpeakeasyBase {
    /**
     * must be an investment product id or 'cash'
     */
    investmentProductId: string;
    /**
     * must be in correct pattern (eg: 25.00, 33.34, 50.25, 100.00)
     */
    ratio: string;
}
export declare class UpdatePortfolioTemplateRequestBody extends SpeakeasyBase {
    portfolioName?: string;
    /**
     * Replaces the array in the server.
     */
    ratios?: UpdatePortfolioTemplateRequestBodyRatios[];
    /**
     * Must match with the reference version in the server
     */
    referenceVersion: number;
}
export declare class UpdatePortfolioTemplateRequest extends SpeakeasyBase {
    requestBody: UpdatePortfolioTemplateRequestBody;
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
export declare class UpdatePortfolioTemplate500ApplicationJSON extends SpeakeasyBase {
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
export declare class UpdatePortfolioTemplate429ApplicationJSON extends SpeakeasyBase {
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
 * Current status of the original request
 */
export declare enum UpdatePortfolioTemplate409ApplicationJSONStatusEnum {
    Processing = "PROCESSING",
    Complete = "COMPLETE"
}
/**
 * Duplicate request
 */
export declare class UpdatePortfolioTemplate409ApplicationJSON extends SpeakeasyBase {
    /**
     * Human readable description of the error
     */
    message: string;
    /**
     * Stringified original response body if status is `COMPLETE`
     */
    response?: Record<string, any>;
    /**
     * Current status of the original request
     */
    status: UpdatePortfolioTemplate409ApplicationJSONStatusEnum;
}
/**
 * The specified resource was not found
 */
export declare class UpdatePortfolioTemplate404ApplicationJSON extends SpeakeasyBase {
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
export declare class UpdatePortfolioTemplate403ApplicationJSON extends SpeakeasyBase {
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
export declare class UpdatePortfolioTemplate401ApplicationJSON extends SpeakeasyBase {
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
export declare class UpdatePortfolioTemplate400ApplicationJSON extends SpeakeasyBase {
    /**
     * Optional error code
     */
    errorCode?: string;
    /**
     * Human readable description of the error
     */
    message: string;
}
export declare class UpdatePortfolioTemplate200ApplicationJSONRatios extends SpeakeasyBase {
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
export declare class UpdatePortfolioTemplate200ApplicationJSON extends SpeakeasyBase {
    createdAt?: Date;
    owner?: string;
    portfolioName: string;
    /**
     * system generated id
     */
    portfolioTemplateId: string;
    ratios: UpdatePortfolioTemplate200ApplicationJSONRatios[];
    referenceVersion: number;
    updatedAt?: Date;
}
export declare class UpdatePortfolioTemplateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * success
     */
    updatePortfolioTemplate200ApplicationJSONObject?: UpdatePortfolioTemplate200ApplicationJSON;
    /**
     * Request is not complete and may have one or more validations errors. Please check the error message and the code
     */
    updatePortfolioTemplate400ApplicationJSONObject?: UpdatePortfolioTemplate400ApplicationJSON;
    /**
     * You do not have permissions to access this resource.
     */
    updatePortfolioTemplate401ApplicationJSONObject?: UpdatePortfolioTemplate401ApplicationJSON;
    /**
     * Your authentication information is missing or invalid. Please check the keys are properly set and its correct
     */
    updatePortfolioTemplate403ApplicationJSONObject?: UpdatePortfolioTemplate403ApplicationJSON;
    /**
     * The specified resource was not found
     */
    updatePortfolioTemplate404ApplicationJSONObject?: UpdatePortfolioTemplate404ApplicationJSON;
    /**
     * Duplicate request
     */
    updatePortfolioTemplate409ApplicationJSONObject?: UpdatePortfolioTemplate409ApplicationJSON;
    /**
     * You have sent too many requests to the system. Please retry later. If you need to increase your throtteling limits, please contact WOS support
     */
    updatePortfolioTemplate429ApplicationJSONObject?: UpdatePortfolioTemplate429ApplicationJSON;
    /**
     * System error. Retry later. If the error persist, contact WOS support
     */
    updatePortfolioTemplate500ApplicationJSONObject?: UpdatePortfolioTemplate500ApplicationJSON;
}
