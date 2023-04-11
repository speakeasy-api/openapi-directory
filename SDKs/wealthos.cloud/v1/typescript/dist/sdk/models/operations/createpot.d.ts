import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreatePotSecurity extends SpeakeasyBase {
    apiSecretKey: string;
}
/**
 * If not populated, will be defaulted to tenancy currency
 */
export declare enum CreatePotRequestBodyPotCurrencyEnum {
    Gbp = "GBP",
    Cad = "CAD",
    Usd = "USD"
}
export declare enum CreatePotRequestBodyStatusEnum {
    Active = "active",
    Inactive = "inactive"
}
export declare class CreatePotRequestBodyInput extends SpeakeasyBase {
    custodianAccountReference?: string;
    custodianClientRef?: string;
    custodianId?: string;
    financialProductId: string;
    investorId: string[];
    portfolioTemplateId?: string;
    /**
     * If not populated, will be defaulted to tenancy currency
     */
    potCurrency?: CreatePotRequestBodyPotCurrencyEnum;
    potName: string;
    regulatorAdvisorId?: string;
    /**
     * Unique request id to ensure idempotency. (ex: UUID)
     */
    requestId: string;
    status: CreatePotRequestBodyStatusEnum;
}
export declare class CreatePotRequest extends SpeakeasyBase {
    requestBody?: CreatePotRequestBodyInput;
    /**
     * ApiSecretKey
     */
    xApiKey: string;
}
/**
 * System error. Retry later. If the error persist, contact WOS support
 */
export declare class CreatePot500ApplicationJSON extends SpeakeasyBase {
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
export declare class CreatePot429ApplicationJSON extends SpeakeasyBase {
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
export declare enum CreatePot409ApplicationJSONStatusEnum {
    Processing = "PROCESSING",
    Complete = "COMPLETE"
}
/**
 * Duplicate request
 */
export declare class CreatePot409ApplicationJSON extends SpeakeasyBase {
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
    status: CreatePot409ApplicationJSONStatusEnum;
}
/**
 * Your authentication information is missing or invalid. Please check the keys are properly set and its correct
 */
export declare class CreatePot403ApplicationJSON extends SpeakeasyBase {
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
export declare class CreatePot401ApplicationJSON extends SpeakeasyBase {
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
export declare class CreatePot400ApplicationJSON extends SpeakeasyBase {
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
 * If not populated, will be defaulted to tenancy currency
 */
export declare enum CreatePot201ApplicationJSONPotCurrencyEnum {
    Gbp = "GBP",
    Cad = "CAD",
    Usd = "USD"
}
export declare enum CreatePot201ApplicationJSONStatusEnum {
    Active = "active",
    Inactive = "inactive"
}
/**
 * success
 */
export declare class CreatePot201ApplicationJSON extends SpeakeasyBase {
    accountId?: string;
    createdAt?: Date;
    custodianAccountReference?: string;
    custodianClientRef?: string;
    custodianId?: string;
    financialProductId: string;
    investorId: string[];
    portfolioTemplateId?: string;
    /**
     * If not populated, will be defaulted to tenancy currency
     */
    potCurrency?: CreatePot201ApplicationJSONPotCurrencyEnum;
    /**
     * system generated id
     */
    potId?: string;
    potName: string;
    referenceVersion?: number;
    regulatorAdvisorId?: string;
    status: CreatePot201ApplicationJSONStatusEnum;
    updatedAt?: Date;
}
export declare class CreatePotResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * success
     */
    createPot201ApplicationJSONObject?: CreatePot201ApplicationJSON;
    /**
     * Request is not complete and may have one or more validations errors. Please check the error message and the code
     */
    createPot400ApplicationJSONObject?: CreatePot400ApplicationJSON;
    /**
     * You do not have permissions to access this resource.
     */
    createPot401ApplicationJSONObject?: CreatePot401ApplicationJSON;
    /**
     * Your authentication information is missing or invalid. Please check the keys are properly set and its correct
     */
    createPot403ApplicationJSONObject?: CreatePot403ApplicationJSON;
    /**
     * Duplicate request
     */
    createPot409ApplicationJSONObject?: CreatePot409ApplicationJSON;
    /**
     * You have sent too many requests to the system. Please retry later. If you need to increase your throtteling limits, please contact WOS support
     */
    createPot429ApplicationJSONObject?: CreatePot429ApplicationJSON;
    /**
     * System error. Retry later. If the error persist, contact WOS support
     */
    createPot500ApplicationJSONObject?: CreatePot500ApplicationJSON;
}
