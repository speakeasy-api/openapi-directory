import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class OrderPlacement {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Place order
     *
     * @remarks
     * Places order without having any prior cart information. This means all information on items, client, payment and shipping must be sent in the body.
     *
     * >⚠️ The authentication of this endpoint is required if you are creating an order with an item that has an attachment that creates a Subscription. For more information, access [Subscriptions API](https://developers.vtex.com/docs/api-reference/subscriptions-api-v3).
     */
    placeOrder(req: operations.PlaceOrderRequest, config?: AxiosRequestConfig): Promise<operations.PlaceOrderResponse>;
    /**
     * Place order from an existing cart
     *
     * @remarks
     * This endpoint places an order from an existing `orderForm` object, meaning an existing cart.
     *
     *
  After the creation of an order with this request, you have five minutes to send payment information and then request payment processing.
     */
    placeOrderFromExistingOrderForm(req: operations.PlaceOrderFromExistingOrderFormRequest, config?: AxiosRequestConfig): Promise<operations.PlaceOrderFromExistingOrderFormResponse>;
    /**
     * Process order
     *
     * @remarks
     * Order processing callback request, which is made after an order's payment is approved.
     *
     *
  > This request has to be made until five minutes after the [Place order](https://developers.vtex.com/docs/api-reference/checkout-api#put-/api/checkout/pub/orders) or [Place order from existing cart](https://developers.vtex.com/docs/api-reference/checkout-api#post-/api/checkout/pub/orderForm/-orderFormId-/transaction) request has been made, or else, the order will not be processed.
     */
    processOrder(req: operations.ProcessOrderRequest, config?: AxiosRequestConfig): Promise<operations.ProcessOrderResponse>;
}
