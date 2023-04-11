import { CartAttachments } from "./cartattachments";
import { Configuration } from "./configuration";
import { CustomData } from "./customdata";
import { Fulfillment } from "./fulfillment";
import * as shared from "./models/shared";
import { OrderPlacement } from "./orderplacement";
import { Region } from "./region";
import { ShoppingCart } from "./shoppingcart";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://vtex.local", "https://{accountName}.{environment}.com.br"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * >ℹ️ Check the new [Checkout onboarding guide](https://developers.vtex.com/vtex-rest-api/docs/checkout-overview). We created this guide to improve the onboarding experience for developers at VTEX. It assembles all documentation on our Developer Portal about the Checkout and is organized by focusing on the developer's journey.
 *
 * @remarks
 *
 * The Checkout API allows you to obtain and configure information about the shopping cart and its attachments, personalization of custom fields, orderForm structure, fulfillment data, order management, and identification of the sellers delivery region.
 *
 * >ℹ️ Data modification operations (`POST`, `PATCH`, `PUT` or `DELETE` endpoints) shall not be performed in parallel in the Checkout APIs. They need to be enqueued by the client/requester. Otherwise, old values   can be overwritten incorrectly or competition errors may occur.
 *
 * >⚠️ All endpoints that consult or edit the orderForm can change the authentication depending on the customer context. If you are handling information from a customer with a complete profile on the store, authentication will be required. You can only access or modify the customer data for these profiles with an authenticated request.
 *
 * ## Shopping cart
 *
 * Allows merchants to simulate, configure and customize shopping cart information.
 *
 * - [POST - Cart Simulation](https://developers.vtex.com/vtex-rest-api/reference/cartsimulation)
 * - [GET - Get current or create a new cart](https://developers.vtex.com/vtex-rest-api/reference/createanewcart)
 * - [GET - Get cart information by ID](https://developers.vtex.com/vtex-rest-api/reference/getcartinformationbyid)
 * - [POST - Remove all items](https://developers.vtex.com/vtex-rest-api/reference/removeallitems)
 * - [GET - Remove all personal data](https://developers.vtex.com/vtex-rest-api/reference/removeallpersonaldata)
 * - [POST - Update cart items](https://developers.vtex.com/vtex-rest-api/reference/itemsupdate)
 * - [POST - Add cart items](https://developers.vtex.com/vtex-rest-api/reference/items)
 * - [PUT - Change price](https://developers.vtex.com/vtex-rest-api/reference/pricechange)
 * - [PATCH - Ignore profile data](https://developers.vtex.com/vtex-rest-api/reference/ignoreprofiledata)
 * - [GET - Cart installments](https://developers.vtex.com/vtex-rest-api/reference/getcartinstallments)
 * - [POST - Add coupons to the cart](https://developers.vtex.com/vtex-rest-api/reference/addcoupons)
 *
 *
 * ## Cart attachments
 *
 * Allows merchants to obtain client profiles and add information to a given shopping cart.
 *
 * - [GET - Get client profile by email](https://developers.vtex.com/vtex-rest-api/reference/getclientprofilebyemail)
 * - [POST - Add client profile](https://developers.vtex.com/vtex-rest-api/reference/addclientprofile)
 * - [POST - Add shipping address and select delivery option](https://developers.vtex.com/vtex-rest-api/reference/addshippingaddress)
 * - [POST - Add client preferences](https://developers.vtex.com/vtex-rest-api/reference/addclientpreferences)
 * - [POST - Add marketing data](https://developers.vtex.com/vtex-rest-api/reference/addmarketingdata)
 * - [POST - Add payment data](https://developers.vtex.com/vtex-rest-api/reference/addpaymentdata)
 * - [POST - Add merchant context data](https://developers.vtex.com/vtex-rest-api/reference/addmerchantcontextdata)
 *
 *
 * ## Custom data
 *
 * Allows merchants to manage custom fields that were created by an app in their account.
 *
 * - [PUT - Set multiple custom field values](https://developers.vtex.com/vtex-rest-api/reference/setmultiplecustomfieldvalues)
 * - [PUT - Set single custom field value](https://developers.vtex.com/vtex-rest-api/reference/setsinglecustomfieldvalue)
 * - [DELETE - Remove single custom field value](https://developers.vtex.com/vtex-rest-api/reference/removesinglecustomfieldvalue)
 *
 *
 * ## Configuration
 *
 * Allows merchants to configure orderForm in the account and seller exchange on a given order.
 *
 * - [GET - Get orderForm configuration](https://developers.vtex.com/vtex-rest-api/reference/getorderformconfiguration)
 * - [POST - Update orderForm configuration](https://developers.vtex.com/vtex-rest-api/reference/updateorderformconfiguration)
 * - [GET - Get window to change seller](https://developers.vtex.com/vtex-rest-api/reference/getwindowtochangeseller)
 * - [POST - Update window to change seller](https://developers.vtex.com/vtex-rest-api/reference/updatewindowtochangeseller)
 * - [POST - Clear orderForm messages](https://developers.vtex.com/vtex-rest-api/reference/clearorderformmessages)
 *
 *
 * ## Fulfillment
 *
 * Allows merchants to obtain pickup points and address information.
 *
 * - [GET - List pickup points by location](https://developers.vtex.com/vtex-rest-api/reference/listpickupppointsbylocation)
 * - [GET - Get address by postal code](https://developers.vtex.com/vtex-rest-api/reference/getaddressbypostalcode)
 *
 *
 * ## Order placement
 *
 * Allows merchants to place and process orders by creating a new cart or using an existing cart.
 *
 * - [POST - Place order from an existing cart](https://developers.vtex.com/vtex-rest-api/reference/placeorderfromexistingorderform)
 * - [PUT - Place order](https://developers.vtex.com/vtex-rest-api/reference/placeorder)
 * - [POST - Process order](https://developers.vtex.com/vtex-rest-api/reference/processorder)
 *
 *
 * ## Region
 *
 * Allows merchants to obtain a list of sellers serving a specific delivery region.
 *
 * - [GET - Get sellers by region or address](https://developers.vtex.com/vtex-rest-api/reference/getsellersbyregion)
 */
export declare class SDK {
    cartAttachments: CartAttachments;
    configuration: Configuration;
    customData: CustomData;
    fulfillment: Fulfillment;
    orderPlacement: OrderPlacement;
    region: Region;
    shoppingCart: ShoppingCart;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
