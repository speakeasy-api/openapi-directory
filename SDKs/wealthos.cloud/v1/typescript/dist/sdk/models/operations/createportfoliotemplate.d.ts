import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreatePortfolioTemplateSecurity extends SpeakeasyBase {
    apiSecretKey: string;
}
export declare class CreatePortfolioTemplateRequestBodyRatios extends SpeakeasyBase {
    /**
     * must be an investment product id or 'cash'
     */
    investmentProductId: string;
    /**
     * must be in correct pattern (eg: 25.00, 33.34, 50.25, 100.00)
     */
    ratio: string;
}
export declare class CreatePortfolioTemplateRequestBodyInput extends SpeakeasyBase {
    portfolioName: string;
    ratios: CreatePortfolioTemplateRequestBodyRatios[];
}
export declare class CreatePortfolioTemplateRequest extends SpeakeasyBase {
    requestBody: CreatePortfolioTemplateRequestBodyInput;
    /**
     * ApiSecretKey
     */
    xApiKey: string;
}
/**
 * System error. Retry later. If the error persist, contact WOS support
 */
export declare class CreatePortfolioTemplate500ApplicationJSON extends SpeakeasyBase {
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
export declare class CreatePortfolioTemplate429ApplicationJSON extends SpeakeasyBase {
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
export declare class CreatePortfolioTemplate404ApplicationJSON extends SpeakeasyBase {
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
export declare class CreatePortfolioTemplate403ApplicationJSON extends SpeakeasyBase {
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
export declare class CreatePortfolioTemplate401ApplicationJSON extends SpeakeasyBase {
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
export declare class CreatePortfolioTemplate400ApplicationJSON extends SpeakeasyBase {
    /**
     * Optional error code
     */
    errorCode?: string;
    /**
     * Human readable description of the error
     */
    message: string;
}
export declare class CreatePortfolioTemplate201ApplicationJSONRatios extends SpeakeasyBase {
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
export declare class CreatePortfolioTemplate201ApplicationJSON extends SpeakeasyBase {
    createdAt?: Date;
    owner?: string;
    portfolioName: string;
    /**
     * system generated id
     */
    portfolioTemplateId: string;
    ratios: CreatePortfolioTemplate201ApplicationJSONRatios[];
    referenceVersion: number;
    updatedAt?: Date;
}
export declare class CreatePortfolioTemplateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * success
     */
    createPortfolioTemplate201ApplicationJSONObject?: CreatePortfolioTemplate201ApplicationJSON;
    /**
     * Request is not complete and may have one or more validations errors. Please check the error message and the code
     */
    createPortfolioTemplate400ApplicationJSONObject?: CreatePortfolioTemplate400ApplicationJSON;
    /**
     * You do not have permissions to access this resource.
     */
    createPortfolioTemplate401ApplicationJSONObject?: CreatePortfolioTemplate401ApplicationJSON;
    /**
     * Your authentication information is missing or invalid. Please check the keys are properly set and its correct
     */
    createPortfolioTemplate403ApplicationJSONObject?: CreatePortfolioTemplate403ApplicationJSON;
    /**
     * The specified resource was not found
     */
    createPortfolioTemplate404ApplicationJSONObject?: CreatePortfolioTemplate404ApplicationJSON;
    /**
     * You have sent too many requests to the system. Please retry later. If you need to increase your throtteling limits, please contact WOS support
     */
    createPortfolioTemplate429ApplicationJSONObject?: CreatePortfolioTemplate429ApplicationJSON;
    /**
     * System error. Retry later. If the error persist, contact WOS support
     */
    createPortfolioTemplate500ApplicationJSONObject?: CreatePortfolioTemplate500ApplicationJSON;
}
