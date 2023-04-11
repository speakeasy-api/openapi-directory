import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PlaceOrderFromExistingOrderFormRequestBody extends SpeakeasyBase {
    /**
     * Interest rate to be used in case it applies.
     */
    interestValue: number;
    /**
     * True if the shopper opted to receive the newsletter.
     */
    optinNewsLetter?: boolean;
    /**
     * ID of the `orderForm` corresponding to the cart from which to place the order. This is the same as the `orderFormId` parameter.
     */
    referenceId: string;
    /**
     * Reference value of the order for calculating interest if that is the case. Can be equal to the total value and does not separate cents. For example, $24.99 is represented `2499`.
     */
    referenceValue: number;
    /**
     * `true` if the shopper's data provided during checkout should be saved for future reference.
     */
    savePersonalData?: boolean;
    /**
     * Total value of the order without separating cents. For example, $24.99 is represented `2499`.
     */
    value: number;
}
export declare class PlaceOrderFromExistingOrderFormRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Type of the content being sent.
     */
    contentType: string;
    requestBody?: PlaceOrderFromExistingOrderFormRequestBody;
    /**
     * ID of the `orderForm` corresponding to the cart from which to place the order.
     */
    orderFormId: string;
}
export declare class PlaceOrderFromExistingOrderFormResponse extends SpeakeasyBase {
    contentType: string;
    placeOrderFromExistingOrderForm200ApplicationJSONObject?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
