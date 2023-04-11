import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetTotalPotValueSecurity extends SpeakeasyBase {
    apiSecretKey: string;
}
export declare class GetTotalPotValueRequest extends SpeakeasyBase {
    /**
     * Id of the investor
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
export declare class GetTotalPotValue500ApplicationJSON extends SpeakeasyBase {
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
export declare class GetTotalPotValue429ApplicationJSON extends SpeakeasyBase {
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
export declare class GetTotalPotValue404ApplicationJSON extends SpeakeasyBase {
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
export declare class GetTotalPotValue403ApplicationJSON extends SpeakeasyBase {
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
export declare class GetTotalPotValue401ApplicationJSON extends SpeakeasyBase {
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
export declare class GetTotalPotValue400ApplicationJSON extends SpeakeasyBase {
    /**
     * Optional error code
     */
    errorCode?: string;
    /**
     * Human readable description of the error
     */
    message: string;
}
export declare class GetTotalPotValue200ApplicationJSONTotalValuesPots extends SpeakeasyBase {
    potId?: string;
}
export declare class GetTotalPotValue200ApplicationJSONTotalValues extends SpeakeasyBase {
    /**
     * Currency of the pots
     */
    potCurrency: string;
    /**
     * Pot ids of the pots belonging to the group
     */
    pots?: GetTotalPotValue200ApplicationJSONTotalValuesPots[];
    /**
     * Total cash value of the group of pots
     */
    totalCashValue: string;
    /**
     * Total free cash value of the group of pots
     */
    totalFreeCashValue: string;
    /**
     * Total free value of the group of pots
     */
    totalFreeValue: string;
    /**
     * Total locked cash value of the group of pots
     */
    totalLockedCashValue: string;
    /**
     * Total locked value of the group of pots
     */
    totalLockedValue: string;
    /**
     * Total settled cash value of the group of pots
     */
    totalSettledCashPosition: string;
    /**
     * Total value of the group of pots
     */
    totalValue: string;
}
/**
 * success
 */
export declare class GetTotalPotValue200ApplicationJSON extends SpeakeasyBase {
    totalValues: GetTotalPotValue200ApplicationJSONTotalValues[];
}
export declare class GetTotalPotValueResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * success
     */
    getTotalPotValue200ApplicationJSONObject?: GetTotalPotValue200ApplicationJSON;
    /**
     * Request is not complete and may have one or more validations errors. Please check the error message and the code
     */
    getTotalPotValue400ApplicationJSONObject?: GetTotalPotValue400ApplicationJSON;
    /**
     * You do not have permissions to access this resource.
     */
    getTotalPotValue401ApplicationJSONObject?: GetTotalPotValue401ApplicationJSON;
    /**
     * Your authentication information is missing or invalid. Please check the keys are properly set and its correct
     */
    getTotalPotValue403ApplicationJSONObject?: GetTotalPotValue403ApplicationJSON;
    /**
     * The specified resource was not found
     */
    getTotalPotValue404ApplicationJSONObject?: GetTotalPotValue404ApplicationJSON;
    /**
     * You have sent too many requests to the system. Please retry later. If you need to increase your throtteling limits, please contact WOS support
     */
    getTotalPotValue429ApplicationJSONObject?: GetTotalPotValue429ApplicationJSON;
    /**
     * System error. Retry later. If the error persist, contact WOS support
     */
    getTotalPotValue500ApplicationJSONObject?: GetTotalPotValue500ApplicationJSON;
}
