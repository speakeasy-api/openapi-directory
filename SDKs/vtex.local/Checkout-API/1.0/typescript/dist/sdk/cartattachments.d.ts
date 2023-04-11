import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class CartAttachments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add client preferences
     *
     * @remarks
     * Use this request to include client preferences information to a given shopping cart.
     *
     * The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.
     *
     *
  > This request has a time out of 12 seconds.
     */
    addClientPreferences(req: operations.AddClientPreferencesRequest, config?: AxiosRequestConfig): Promise<operations.AddClientPreferencesResponse>;
    /**
     * Add client profile
     *
     * @remarks
     * Use this request to include client profile information to a given shopping cart.
     *
     * The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.
     *
     *
  > This request has a time out of 12 seconds.
     *
     * >⚠️ The authentication of this endpoint can change depending on the customer context. If you are modifying information from a customer with a complete profile on the store, the response will return the customer's data masked. You can only access the customer data with an authenticated request.
     */
    addClientProfile(req: operations.AddClientProfileRequest, config?: AxiosRequestConfig): Promise<operations.AddClientProfileResponse>;
    /**
     * Add marketing data
     *
     * @remarks
     * Use this request to include marketing information to a given shopping cart.
     *
     * The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.
     *
     *
  > This request has a time out of 12 seconds.
     */
    addMarketingData(req: operations.AddMarketingDataRequest, config?: AxiosRequestConfig): Promise<operations.AddMarketingDataResponse>;
    /**
     * Add merchant context data
     *
     * @remarks
     * This endpoint is used for the merchant to add to the cart any relevant information that is related to the context of a specific order.
     *
     * The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.
     *
     *
  > This request has a time out of 12 seconds.
     */
    addMerchantContextData(req: operations.AddMerchantContextDataRequest, config?: AxiosRequestConfig): Promise<operations.AddMerchantContextDataResponse>;
    /**
     * Add payment data
     *
     * @remarks
     * Use this request to include payment information to a given shopping cart. The payment information attachment in the shopping cart does not determine the final order payment method in itself. However, it allows tha platform to update any relevant information that may be impacted by the payment method.
     *
     * The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.
     *
     *
  > This request has a time out of 12 seconds.
     */
    addPaymentData(req: operations.AddPaymentDataRequest, config?: AxiosRequestConfig): Promise<operations.AddPaymentDataResponse>;
    /**
     * Add shipping address and select delivery option
     *
     * @remarks
     * Use this request to include shipping information and/or selected delivery option to a given shopping cart.
     *
     * To add shipping addresses send the `selectedAddresses` array. For delivery option use the `logisticsInfo` array.
     *
     * The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.
     *
     *
  > This request has a time out of 12 seconds.
     *
     * >⚠️ The authentication of this endpoint can change depending on the customer context. If you are modifying information from a customer with a complete profile on the store, the response will return the customer's data masked. You can only access the customer data with an authenticated request.
     */
    addShippingAddress(req: operations.AddShippingAddressRequest, config?: AxiosRequestConfig): Promise<operations.AddShippingAddressResponse>;
    /**
     * Get client profile by email
     *
     * @remarks
     * Retrieve a client's profile information by providing an email address.
     *
     *
  If the response body fields are empty, the following situations may have occurred:
     *
     *
  1. There is no client registered with the email address provided in your store, or;
     *
  2. Client profile is invalid or incomplete. For more information, see [SmartCheckout - Customer information automatic fill-in](https://help.vtex.com/en/tutorial/smartcheckout-customer-information-automatic-fill-in--2Nuu3xAFzdhIzJIldAdtan).
     *
     * >⚠️ The authentication of this endpoint can change depending on the customer context. If you are consulting information from a customer with a complete profile on the store, the response will return the customer's data masked. You can only access the customer data with an authenticated request.
     */
    getClientProfileByEmail(req: operations.GetClientProfileByEmailRequest, config?: AxiosRequestConfig): Promise<operations.GetClientProfileByEmailResponse>;
}
