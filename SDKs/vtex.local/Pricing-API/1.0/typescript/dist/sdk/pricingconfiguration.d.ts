import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class PricingConfiguration {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get Pricing Configuration
     *
     * @remarks
     * Retrieves Pricing Configuration.
     * ## Response body example
     *
     * ```json
     * {
     *     "hasMigrated": true,
     *     "migrationStatus": "Completed",
     *     "defaultMarkup": 100,
     *     "priceVariation": {
     *         "upperLimit": null,
     *         "lowerLimit": null
     *     },
     *     "minimumMarkups": {
     *         "1": 100,
     *         "2": 90
     *     },
     *     "tradePolicyConfigs": [],
     *     "sellersToOverride": [],
     *     "hasPriceInheritance": false,
     *     "priceInheritance": "never",
     *     "hasOptionalBasePrice": false,
     *     "blockAccount": false,
     *     "blockedRoutes": null,
     *     "priceTableSelectionStrategy": "first",
     *     "priceTableLimit": null
     * }
     * ```
     */
    getPricingConfig(req: operations.GetPricingConfigRequest, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.GetPricingConfigResponse>;
    /**
     * Get Pricing v2 Status
     *
     * @remarks
     * Retrieves Pricing v2 Status.
     * ## Response body example
     *
     * ```json
     * {
     *     "isActive": true,
     *     "hasMigrated": true
     * }
     * ```
     */
    getPricingv2Status(req: operations.GetPricingv2StatusRequest, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.GetPricingv2StatusResponse>;
}
