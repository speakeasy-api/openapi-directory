import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetPotsSecurity extends SpeakeasyBase {
    apiSecretKey: string;
}
export declare class GetPotsRequest extends SpeakeasyBase {
    /**
     * multiple financial product ids as comma seperated string
     */
    financialProductId?: string;
    /**
     * Investor Id
     */
    investorId: string;
    /**
     * ApiSecretKey
     */
    xApiKey: string;
}
/**
 * System error. Retry later. If the error persist, contact WOS support
 */
export declare class GetPots500ApplicationJSON extends SpeakeasyBase {
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
export declare class GetPots429ApplicationJSON extends SpeakeasyBase {
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
export declare class GetPots404ApplicationJSON extends SpeakeasyBase {
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
export declare class GetPots403ApplicationJSON extends SpeakeasyBase {
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
export declare class GetPots401ApplicationJSON extends SpeakeasyBase {
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
export declare class GetPots400ApplicationJSON extends SpeakeasyBase {
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
export declare enum GetPots200ApplicationJSONPotsPotCurrencyEnum {
    Gbp = "GBP",
    Cad = "CAD",
    Usd = "USD"
}
export declare enum GetPots200ApplicationJSONPotsStatusEnum {
    Active = "active",
    Inactive = "inactive"
}
export declare class GetPots200ApplicationJSONPots extends SpeakeasyBase {
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
    potCurrency?: GetPots200ApplicationJSONPotsPotCurrencyEnum;
    /**
     * system generated id
     */
    potId?: string;
    potName: string;
    referenceVersion?: number;
    regulatorAdvisorId?: string;
    status: GetPots200ApplicationJSONPotsStatusEnum;
    updatedAt?: Date;
}
/**
 * Array of all active investment pots created by the investor
 */
export declare class GetPots200ApplicationJSON extends SpeakeasyBase {
    pots: GetPots200ApplicationJSONPots[];
}
export declare class GetPotsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * success
     */
    getPots200ApplicationJSONObject?: GetPots200ApplicationJSON;
    /**
     * Request is not complete and may have one or more validations errors. Please check the error message and the code
     */
    getPots400ApplicationJSONObject?: GetPots400ApplicationJSON;
    /**
     * You do not have permissions to access this resource.
     */
    getPots401ApplicationJSONObject?: GetPots401ApplicationJSON;
    /**
     * Your authentication information is missing or invalid. Please check the keys are properly set and its correct
     */
    getPots403ApplicationJSONObject?: GetPots403ApplicationJSON;
    /**
     * The specified resource was not found
     */
    getPots404ApplicationJSONObject?: GetPots404ApplicationJSON;
    /**
     * You have sent too many requests to the system. Please retry later. If you need to increase your throtteling limits, please contact WOS support
     */
    getPots429ApplicationJSONObject?: GetPots429ApplicationJSON;
    /**
     * System error. Retry later. If the error persist, contact WOS support
     */
    getPots500ApplicationJSONObject?: GetPots500ApplicationJSON;
}
