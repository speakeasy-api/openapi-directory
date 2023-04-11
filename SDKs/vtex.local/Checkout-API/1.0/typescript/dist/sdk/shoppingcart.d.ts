import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ShoppingCart {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add coupons to the cart
     *
     * @remarks
     * Use this request to add coupons to a given shopping cart.
     */
    addCoupons(req: operations.AddCouponsRequest, config?: AxiosRequestConfig): Promise<operations.AddCouponsResponse>;
    /**
     * Cart simulation
     *
     * @remarks
     * This endpoint is used to simulate a cart in VTEX Checkout.
     *
     * It receives an **SKU ID**, the **quantity** of items in the cart and the ID of the **Seller**.
     *
     * It sends back all information about the cart, such as the selling price of each item, rates and benefits data, payment and logistics info.
     *
     * This is useful whenever you need to know the availability of fulfilling an order for a specific cart setting, since the API response will let you know the updated price, inventory and shipping data.
     *
     * **Important**: The fields (`sku id`, `quantity`, `seller`, `country`, `postalCode` and `geoCoordinates`) are just examples of content that you can simulate in your cart. You can add more fields to the request as per your need. Access the [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) guide to check the available fields.
     */
    cartSimulation(req: operations.CartSimulationRequest, config?: AxiosRequestConfig): Promise<operations.CartSimulationResponse>;
    /**
     * Get current or create a new cart
     *
     * @remarks
     * You can use this request to get your current shopping cart information (`orderFormId`) or to create a new cart.
     *
     * **Important**: To create a new empty shopping cart you need to send this request with the query param `forceNewCart=true`.
     *
     * The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` obtained in response is the identification code of the newly created cart.
     *
     *
  > This request has a time out of 45 seconds.
     */
    createANewCart(req: operations.CreateANewCartRequest, config?: AxiosRequestConfig): Promise<operations.CreateANewCartResponse>;
    /**
     * Get cart information by ID
     *
     * @remarks
     * Use this request to get all information associated to a given shopping  cart.
     *
     * The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.
     *
     *
  > This request has a time out of 45 seconds.
     */
    getCartInformationById(req: operations.GetCartInformationByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetCartInformationByIdResponse>;
    /**
     * Cart installments
     *
     * @remarks
     * Retrieves possible amount of installments and respective values for a given cart with a given payment method.
     *
     * The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.
     *
     *
  This endpoint can be used to get the installment options for only one payment method at a time.
     *
     *
  This endpoint should be called only after the selected `orderForm` already has a `paymentData`.
     */
    getCartInstallments(req: operations.GetCartInstallmentsRequest, config?: AxiosRequestConfig): Promise<operations.GetCartInstallmentsResponse>;
    /**
     * Ignore profile data
     *
     * @remarks
     * When a shopper provides an email address at Checkout, the platform tries to retrieve existing profile information for that email and add it to the shopping cart information. Use this request if you want to change this behavior for a given cart, meaning profile information will not be included in the order automattically.
     *
     * The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.
     *
     * Note that this request will only work if you have not sent the `clientProfileData` to the cart yet. Sending it to a cart that already has a `clientProfileData` should return a status `403 Forbidden` error, with an `Access denied` message.
     */
    ignoreProfileData(req: operations.IgnoreProfileDataRequest, config?: AxiosRequestConfig): Promise<operations.IgnoreProfileDataResponse>;
    /**
     * Add cart items
     *
     * @remarks
     * Use this request to add a new item to the shopping cart.
     *
     * The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.
     *
     *
  > This request has a time out of 45 seconds.
     */
    items(req: operations.ItemsRequest, config?: AxiosRequestConfig): Promise<operations.ItemsResponse>;
    /**
     * Update cart items
     *
     * @remarks
     * You can use this request to:
     *
     *
  1. Change the quantity of one or more items in a specific cart.
     *
  2. Remove an item from the cart (by sending the `quantity` value = `0` in the request body).
     *
     * **Important**: To remove all items from the cart at the same time, use the [Remove all items](https://developers.vtex.com/vtex-rest-api/reference/removeallitems) endpoint.
     *
     * The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure that represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.
     *
     *
  > This request has a time out of 45 seconds.
     */
    itemsUpdate(req: operations.ItemsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.ItemsUpdateResponse>;
    /**
     * Change price
     *
     * @remarks
     * This request changes the price of an SKU in a cart. You can also perform type of bulk price change with the [Update cart items request](https://developers.vtex.com/vtex-rest-api/reference/shopping-cart#itemsupdate)
     *
     * The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.
     *
     *
  You need to inform which cart you are referring to, by sending its `orderFormId`; and what is the item whose price you want to change, by sending its `itemIndex`.
     *
     *
  You also need to pass the new price value in the body.
     *
     *
  Remember that, to use this endpoint, the feature of *manual price* must be active. To check if it's active, use the [Get orderForm configuration](https://developers.vtex.com/reference#getorderformconfiguration) endpoint. To make it active, use the [Update orderForm configuration](https://developers.vtex.com/reference#updateorderformconfiguration) endpoint, making the `allowManualPrice` field `true`.
     *
     *
  > Whenever you use this request to change the price of an item, all items in that cart with the same SKU are affected by this change. This applies even to items that share the SKU but have been separated into different objects in the `items` array due to customizations or attachments, for example.
     */
    priceChange(req: operations.PriceChangeRequest, config?: AxiosRequestConfig): Promise<operations.PriceChangeResponse>;
    /**
     * Remove all items
     *
     * @remarks
     * This request removes all items from a given cart, leaving it empty.
     *
     * You must send an empty JSON in the body of the request.
     *
     * The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.
     *
     * **Important**: **Request Body** must always be sent with empty value "{ }" in this endpoint.
     */
    removeAllItems(req: operations.RemoveAllItemsRequest, config?: AxiosRequestConfig): Promise<operations.RemoveAllItemsResponse>;
    /**
     * Remove all personal data
     *
     * @remarks
     * This call removes all user information, making a cart anonymous while leaving the items.
     *
     * The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure that represents a shopping cart and contains all information about it. Hence, the `orderFormId` is the identification code of a given cart.
     *
     * This call works by creating a new orderForm, setting a new cookie, and returning a redirect 302 to the cart URL (`/checkout/#/orderform`).
     */
    removeallpersonaldata(req: operations.RemoveallpersonaldataRequest, config?: AxiosRequestConfig): Promise<operations.RemoveallpersonaldataResponse>;
}
