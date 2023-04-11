import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Configuration {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Clear orderForm messages
     *
     * @remarks
     * This request removes all messages from the `messages` field of the orderForm , leaving it empty.
     *
     * You must send an empty JSON in the body of the request.
     *
     * The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.
     *
     * **Important**: **Request Body** must always be sent with empty value "{ }" in this endpoint.
     */
    clearorderFormMessages(req: operations.ClearorderFormMessagesRequest, config?: AxiosRequestConfig): Promise<operations.ClearorderFormMessagesResponse>;
    /**
     * Get window to change seller
     *
     * @remarks
     * Retrieves a marketplace’s window to change seller, that is, the period when it is possible to choose another seller to fulfill a given order after the original seller has canceled it.
     *
     *
  The default period for this window is of 2 days, but it can be configured by the request Update window to change seller.
     */
    getWindowToChangeSeller(req: operations.GetWindowToChangeSellerRequest, config?: AxiosRequestConfig): Promise<operations.GetWindowToChangeSellerResponse>;
    /**
     * Get orderForm configuration
     *
     * @remarks
     * Retrieves the settings that are currently applied to every orderForm in the account.
     *
     *
  These settings are defined by the request [Update orderForm configuration](https://developers.vtex.com/reference/configuration#updateorderformconfiguration).
     *
     *
  Always use this request to retrieve the current configuration before performing an update. By doing so you ensure that you are modifying only the properties you want.
     */
    getorderFormconfiguration(req: operations.GetorderFormconfigurationRequest, config?: AxiosRequestConfig): Promise<operations.GetorderFormconfigurationResponse>;
    /**
     * Update window to change seller
     *
     * @remarks
     * Updates a marketplace’s window to change seller, that is, the period when it is possible to choose another seller to fulfill a given order after the original seller has canceled it.
     *
     *
  It is possible to check the current window using the request Get window to change seller.
     */
    updateWindowToChangeSeller(req: operations.UpdateWindowToChangeSellerRequest, config?: AxiosRequestConfig): Promise<operations.UpdateWindowToChangeSellerResponse>;
    /**
     * Update orderForm configuration
     *
     * @remarks
     * Determines settings that will apply to every orderForm in the account.
     *
     *
  For example, if you create an app using this request, every orderForm of this account will have the custom fields created though it.
     *
     *
  **Important**: always retrieve the current configuration before performing an update to ensure that you are modifying only the properties you want. Otherwise, old values can be overwritten. To retrieve the current configuration, use the request [Get orderForm configuration](https://developers.vtex.com/reference#getorderformconfiguration).
     */
    updateorderFormconfiguration(req: operations.UpdateorderFormconfigurationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateorderFormconfigurationResponse>;
}
