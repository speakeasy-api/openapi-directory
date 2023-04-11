import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * **Note:** The Entitlements settings must be enabled to use this operation. Access to the Entitlements feature requires a specific edition of Zuora. See [Zuora Editions](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/C_Zuora_Editions) for details.
 *
 * @remarks
 *
 */
export declare class SubscriptionProductFeatures {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * CRUD: Retrieve a subscription product feature
     */
    objectGETSubscriptionProductFeature(req: operations.ObjectGETSubscriptionProductFeatureRequest, config?: AxiosRequestConfig): Promise<operations.ObjectGETSubscriptionProductFeatureResponse>;
}
