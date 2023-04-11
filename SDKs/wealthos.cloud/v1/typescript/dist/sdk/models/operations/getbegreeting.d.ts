import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * System error. Retry later. If the error persist, contact WOS support
 */
export declare class GetBEGreeting500ApplicationJSON extends SpeakeasyBase {
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
export declare class GetBEGreeting429ApplicationJSON extends SpeakeasyBase {
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
export declare class GetBEGreeting403ApplicationJSON extends SpeakeasyBase {
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
 * A greeting message which identifies the tenant
 */
export declare class GetBEGreeting200ApplicationJSON extends SpeakeasyBase {
    members?: string;
    message?: string[];
    tenant?: string;
}
export declare class GetBEGreetingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A greeting message which identifies the tenant
     */
    getBEGreeting200ApplicationJSONObject?: GetBEGreeting200ApplicationJSON;
    /**
     * Your authentication information is missing or invalid. Please check the keys are properly set and its correct
     */
    getBEGreeting403ApplicationJSONObject?: GetBEGreeting403ApplicationJSON;
    /**
     * You have sent too many requests to the system. Please retry later. If you need to increase your throtteling limits, please contact WOS support
     */
    getBEGreeting429ApplicationJSONObject?: GetBEGreeting429ApplicationJSON;
    /**
     * System error. Retry later. If the error persist, contact WOS support
     */
    getBEGreeting500ApplicationJSONObject?: GetBEGreeting500ApplicationJSON;
}
