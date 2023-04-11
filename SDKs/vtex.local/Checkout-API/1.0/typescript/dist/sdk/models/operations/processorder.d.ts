import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProcessOrderRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Type of the content being sent.
     */
    contentType: string;
    /**
     * VTEX Chekout cookie associated with a specific order. Use the `Vtex_CHKO_Auth` and the `CheckoutDataAccess` cookies returned by the [Place order](https://developers.vtex.com/vtex-rest-api/reference/order-placement-1#placeorder) or [Place order from existing cart](https://developers.vtex.com/vtex-rest-api/reference/order-placement-1#placeorderfromexistingorderform) API requests, like a browser would.
     */
    cookie: string;
    /**
     * Order group. It is the part of the `orderId` that comes before the `-`. For example, the `orderGroup` of the order `123456789-01` is `123456789`.
     */
    orderGroup: string;
}
/**
 * Information on the error.
 */
export declare class ProcessOrder500ApplicationJSONError extends SpeakeasyBase {
    /**
     * Error code.
     */
    code?: string;
    /**
     * Error exception.
     */
    exception?: string;
    /**
     * Error message.
     */
    message?: string;
}
/**
 * Internal Server Error
 */
export declare class ProcessOrder500ApplicationJSON extends SpeakeasyBase {
    /**
     * Information on the error.
     */
    error?: ProcessOrder500ApplicationJSONError;
    /**
     * Operation ID.
     */
    operationId?: string;
}
export declare class ProcessOrderResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Internal Server Error
     */
    processOrder500ApplicationJSONObject?: ProcessOrder500ApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
