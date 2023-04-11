import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdatePotSecurity extends SpeakeasyBase {
    apiSecretKey: string;
}
export declare enum UpdatePotUpdateRequestBodyForPotStatusEnum {
    Active = "active",
    Inactive = "inactive"
}
/**
 * JSON for the Update pot resource type
 */
export declare class UpdatePotUpdateRequestBodyForPot extends SpeakeasyBase {
    custodianAccountReference?: string;
    custodianClientRef?: string;
    custodianId?: string;
    portfolioTemplateId?: string;
    potName?: string;
    referenceVersion: number;
    regulatorAdvisorId?: string;
    status?: UpdatePotUpdateRequestBodyForPotStatusEnum;
}
export declare class UpdatePotRequest extends SpeakeasyBase {
    requestBody: UpdatePotUpdateRequestBodyForPot;
    /**
     * Pot Id
     */
    potId: string;
    /**
     * ApiSecretKey
     */
    xApiKey: string;
}
/**
 * System error. Retry later. If the error persist, contact WOS support
 */
export declare class UpdatePot500ApplicationJSON extends SpeakeasyBase {
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
export declare class UpdatePot429ApplicationJSON extends SpeakeasyBase {
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
export declare enum UpdatePot409ApplicationJSONStatusEnum {
    Processing = "PROCESSING",
    Complete = "COMPLETE"
}
/**
 * Duplicate request
 */
export declare class UpdatePot409ApplicationJSON extends SpeakeasyBase {
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
    status: UpdatePot409ApplicationJSONStatusEnum;
}
/**
 * The specified resource was not found
 */
export declare class UpdatePot404ApplicationJSON extends SpeakeasyBase {
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
export declare class UpdatePot403ApplicationJSON extends SpeakeasyBase {
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
export declare class UpdatePot401ApplicationJSON extends SpeakeasyBase {
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
export declare class UpdatePot400ApplicationJSON extends SpeakeasyBase {
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
export declare enum UpdatePot200ApplicationJSONPotCurrencyEnum {
    Gbp = "GBP",
    Cad = "CAD",
    Usd = "USD"
}
export declare enum UpdatePot200ApplicationJSONStatusEnum {
    Active = "active",
    Inactive = "inactive"
}
/**
 * success
 */
export declare class UpdatePot200ApplicationJSON extends SpeakeasyBase {
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
    potCurrency?: UpdatePot200ApplicationJSONPotCurrencyEnum;
    /**
     * system generated id
     */
    potId?: string;
    potName: string;
    referenceVersion?: number;
    regulatorAdvisorId?: string;
    status: UpdatePot200ApplicationJSONStatusEnum;
    updatedAt?: Date;
}
export declare class UpdatePotResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * success
     */
    updatePot200ApplicationJSONObject?: UpdatePot200ApplicationJSON;
    /**
     * Request is not complete and may have one or more validations errors. Please check the error message and the code
     */
    updatePot400ApplicationJSONObject?: UpdatePot400ApplicationJSON;
    /**
     * You do not have permissions to access this resource.
     */
    updatePot401ApplicationJSONObject?: UpdatePot401ApplicationJSON;
    /**
     * Your authentication information is missing or invalid. Please check the keys are properly set and its correct
     */
    updatePot403ApplicationJSONObject?: UpdatePot403ApplicationJSON;
    /**
     * The specified resource was not found
     */
    updatePot404ApplicationJSONObject?: UpdatePot404ApplicationJSON;
    /**
     * Duplicate request
     */
    updatePot409ApplicationJSONObject?: UpdatePot409ApplicationJSON;
    /**
     * You have sent too many requests to the system. Please retry later. If you need to increase your throtteling limits, please contact WOS support
     */
    updatePot429ApplicationJSONObject?: UpdatePot429ApplicationJSON;
    /**
     * System error. Retry later. If the error persist, contact WOS support
     */
    updatePot500ApplicationJSONObject?: UpdatePot500ApplicationJSON;
}
