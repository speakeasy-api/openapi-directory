import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class OrderHook {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete hook configuration
     *
     * @remarks
     * Deletes a given hook configuration.
     *
     *
  Learn more with the [orders hook guide](https://developers.vtex.com/vtex-rest-api/docs/orders-feed#hook).
     */
    deleteHookConfiguration(req: operations.DeleteHookConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteHookConfigurationResponse>;
    /**
     * Get hook configuration
     *
     * @remarks
     * Retrieves a given hook's configuration details. Learn more with the [orders hook guide](https://developers.vtex.com/vtex-rest-api/docs/orders-feed#hook).
     *
     * > 📘 Onboarding guide
     * >
     * > Check the new [Orders onboarding guide](https://developers.vtex.com/vtex-rest-api/docs/orders-overview). We created this guide to improve the onboarding experience for developers at VTEX. It assembles all documentation on our Developer Portal about Orders and is organized by focusing on the developer's journey.
     *
     *
     */
    getHookConfiguration(req: operations.GetHookConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.GetHookConfigurationResponse>;
    /**
     * Create or update hook configuration
     *
     * @remarks
     * Configures filtering rules applied to orders hook. Learn more with the [orders hook guide](https://developers.vtex.com/vtex-rest-api/docs/orders-feed#hook).
     *
     *
  There are two types of filtering that can be used:
     *
     *
   - `FromWorkflow`: filters orders by status.
     *
     *
   - `FromOrders`: uses JSONata expressions to filter orders according to any property in the orders JSON document.
     *
     *
   This enables stores to filter delivered orders and orders in which products have been added or removed, for example.
     *
     *
  To learn more, access the [JSONata documentation](https://docs.jsonata.org/overview.html) and test filtering JSONata expressions with our [expressions API](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/orders/expressions/jsonata).
     */
    hookConfiguration(req: operations.HookConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.HookConfigurationResponse>;
}
