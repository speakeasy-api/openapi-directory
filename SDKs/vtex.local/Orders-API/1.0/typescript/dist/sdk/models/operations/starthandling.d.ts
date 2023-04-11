import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class StartHandlingRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Type of the content being sent.
     */
    contentType: string;
    /**
     * Order ID is a unique code that identifies an order.
     */
    orderId: string;
}
/**
 * Object containing the error information
 */
export declare class StartHandling409ApplicationJSONError extends SpeakeasyBase {
    /**
     * Error code in the Order Management System
     */
    code?: string;
    /**
     * Exception
     */
    exception?: string;
    /**
     * Error message
     */
    message?: string;
}
/**
 * Root object
 */
export declare class StartHandling409ApplicationJSON extends SpeakeasyBase {
    /**
     * Object containing the error information
     */
    error?: StartHandling409ApplicationJSONError;
}
/**
 * Object containing the error information
 */
export declare class StartHandling401ApplicationJSONError extends SpeakeasyBase {
    /**
     * Error code in the Order Management System
     */
    code?: string;
    /**
     * Exception
     */
    exception?: string;
    /**
     * Error message
     */
    message?: string;
}
/**
 * Root object
 */
export declare class StartHandling401ApplicationJSON extends SpeakeasyBase {
    /**
     * Object containing the error information
     */
    error?: StartHandling401ApplicationJSONError;
}
export declare class StartHandlingResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * [Unauthorized](https://httpstatuses.com/401)
     */
    startHandling401ApplicationJSONObject?: StartHandling401ApplicationJSON;
    /**
     * [Conflict](https://httpstatuses.com/409)
     */
    startHandling409ApplicationJSONObject?: StartHandling409ApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
