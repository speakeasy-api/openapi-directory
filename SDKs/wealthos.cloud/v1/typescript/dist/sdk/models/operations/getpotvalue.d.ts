import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetPotValueSecurity extends SpeakeasyBase {
    apiSecretKey: string;
}
export declare class GetPotValueRequest extends SpeakeasyBase {
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
export declare class GetPotValue500ApplicationJSON extends SpeakeasyBase {
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
export declare class GetPotValue429ApplicationJSON extends SpeakeasyBase {
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
export declare class GetPotValue404ApplicationJSON extends SpeakeasyBase {
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
export declare class GetPotValue403ApplicationJSON extends SpeakeasyBase {
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
export declare class GetPotValue401ApplicationJSON extends SpeakeasyBase {
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
export declare class GetPotValue400ApplicationJSON extends SpeakeasyBase {
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
 * success
 */
export declare class GetPotValue200ApplicationJSON extends SpeakeasyBase {
    /**
     * Currency of the pot
     */
    potCurrency: string;
    /**
     * Unique id of the pot
     */
    potId: string;
    /**
     * Total settled cash value of holdings of the pot
     */
    settledCashPosition: string;
    /**
     * Total cash value of holdings of the pot
     */
    totalCashValue: string;
    /**
     * Total free cash value of holdings of the pot
     */
    totalFreeCashValue: string;
    /**
     * Total free value of holdings of the pot
     */
    totalFreeValue: string;
    /**
     * Total locked cash value of holdings of the pot
     */
    totalLockedCashValue: string;
    /**
     * Total locked value of holdings of the pot
     */
    totalLockedValue: string;
    /**
     * Total value of holdings of the pot
     */
    totalValue: string;
}
export declare class GetPotValueResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * success
     */
    getPotValue200ApplicationJSONObject?: GetPotValue200ApplicationJSON;
    /**
     * Request is not complete and may have one or more validations errors. Please check the error message and the code
     */
    getPotValue400ApplicationJSONObject?: GetPotValue400ApplicationJSON;
    /**
     * You do not have permissions to access this resource.
     */
    getPotValue401ApplicationJSONObject?: GetPotValue401ApplicationJSON;
    /**
     * Your authentication information is missing or invalid. Please check the keys are properly set and its correct
     */
    getPotValue403ApplicationJSONObject?: GetPotValue403ApplicationJSON;
    /**
     * The specified resource was not found
     */
    getPotValue404ApplicationJSONObject?: GetPotValue404ApplicationJSON;
    /**
     * You have sent too many requests to the system. Please retry later. If you need to increase your throtteling limits, please contact WOS support
     */
    getPotValue429ApplicationJSONObject?: GetPotValue429ApplicationJSON;
    /**
     * System error. Retry later. If the error persist, contact WOS support
     */
    getPotValue500ApplicationJSONObject?: GetPotValue500ApplicationJSON;
}
