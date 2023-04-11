import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetPotSecurity extends SpeakeasyBase {
    apiSecretKey: string;
}
export declare class GetPotRequest extends SpeakeasyBase {
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
export declare class GetPot500ApplicationJSON extends SpeakeasyBase {
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
export declare class GetPot429ApplicationJSON extends SpeakeasyBase {
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
export declare class GetPot404ApplicationJSON extends SpeakeasyBase {
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
export declare class GetPot403ApplicationJSON extends SpeakeasyBase {
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
export declare class GetPot401ApplicationJSON extends SpeakeasyBase {
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
export declare enum GetPot200ApplicationJSONPotCurrencyEnum {
    Gbp = "GBP",
    Cad = "CAD",
    Usd = "USD"
}
export declare enum GetPot200ApplicationJSONStatusEnum {
    Active = "active",
    Inactive = "inactive"
}
/**
 * success
 */
export declare class GetPot200ApplicationJSON extends SpeakeasyBase {
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
    potCurrency?: GetPot200ApplicationJSONPotCurrencyEnum;
    /**
     * system generated id
     */
    potId?: string;
    potName: string;
    referenceVersion?: number;
    regulatorAdvisorId?: string;
    status: GetPot200ApplicationJSONStatusEnum;
    updatedAt?: Date;
}
export declare class GetPotResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * success
     */
    getPot200ApplicationJSONObject?: GetPot200ApplicationJSON;
    /**
     * You do not have permissions to access this resource.
     */
    getPot401ApplicationJSONObject?: GetPot401ApplicationJSON;
    /**
     * Your authentication information is missing or invalid. Please check the keys are properly set and its correct
     */
    getPot403ApplicationJSONObject?: GetPot403ApplicationJSON;
    /**
     * The specified resource was not found
     */
    getPot404ApplicationJSONObject?: GetPot404ApplicationJSON;
    /**
     * You have sent too many requests to the system. Please retry later. If you need to increase your throtteling limits, please contact WOS support
     */
    getPot429ApplicationJSONObject?: GetPot429ApplicationJSON;
    /**
     * System error. Retry later. If the error persist, contact WOS support
     */
    getPot500ApplicationJSONObject?: GetPot500ApplicationJSON;
}
