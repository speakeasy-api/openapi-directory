import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class SKUApprovalSettings {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get Account's Approval Settings
     *
     * @remarks
     * This endpoint retrieves the current approval settings of a marketplace's Received SKUs module. Its response includes:
     *
     * - `Score`: Matcher scores for approving and rejecting SKUs received from sellers.
     *
     * - `Matchers`: All Matchers configured on the marketplace, and their respective details.
     *
     * - `SpecificationsMapping`: Mapping of product and SKU specifications, per seller.
     *
     * - `MatchFlux`: This field determines the type of approval configuration applied to SKUs received from a seller.
     *
     * The possible values include:
     *
     * -`default`, where the Matcher reviews the SKU, and approves it based on its score.
     *
     * -`manual`, for manual approvals through the Received SKU UI, or Match API.
     *
     * -`autoApprove`, for every SKU received from a given seller to be approved automatically, regardless of their Matcher Score.
     */
    getaccountconfig(req: operations.GetaccountconfigRequest, config?: AxiosRequestConfig): Promise<operations.GetaccountconfigResponse>;
    /**
     * Get autoApprove Status in Account Settings
     *
     * @remarks
     * This endpoint can be used to check whether the autoapprove setting is active or not, for a specific seller.
     *
     * If the response is `true`, the autoapprove setting is active. If the response is `false`, it is inactive.
     */
    getautoApprovevaluefromconfig(req: operations.GetautoApprovevaluefromconfigRequest, config?: AxiosRequestConfig): Promise<operations.GetautoApprovevaluefromconfigResponse>;
    /**
     * Get Seller's Approval Settings
     *
     * @remarks
     * This endpoint retrieves the current Received SKUs approval settings applied to a specific seller. Its response includes:
     *
     * - `sellerId`: A string that identifies the seller in the marketplace.
     *
     * - `accountId`: Marketplace’s account ID.
     *
     * - `accountName`: Marketplace’s account name.
     *
     * - `mapping`: Mapping of SKU and product Specifications.
     *
     * - `matchFlux`: This field determines the type of approval configuration applied to SKUs received  from a seller.
     *
     * The possible values include:
     *
     * -`default`, where the Matcher reviews the SKU, and approves it based on its score.
     *
     * -`manual`, for manual approvals through the Received SKU UI and Match API.
     *
     * -`autoApprove`, for every SKU received from a given seller to be approved automatically, regardless of the Matcher Score.
     */
    getselleraccountconfig(req: operations.GetselleraccountconfigRequest, config?: AxiosRequestConfig): Promise<operations.GetselleraccountconfigResponse>;
    /**
     * Save Seller's Approval Settings
     *
     * @remarks
     * Marketplaces use this endpoint to create or update approval settings to a specific seller, on the Received SKUs module.
     *
     * The request includes all the details necessary to implement the chosen approval settings.
     */
    putselleraccountconfig(req: operations.PutselleraccountconfigRequest, config?: AxiosRequestConfig): Promise<operations.PutselleraccountconfigResponse>;
    /**
     * Save Account's Approval Settings
     *
     * @remarks
     * Marketplaces use this endpoint to create or update approval settings on their Received SKUs module.
     *
     * The request includes all the details necessary to implement the chosen approval settings.
     */
    saveaccountconfig(req: operations.SaveaccountconfigRequest, config?: AxiosRequestConfig): Promise<operations.SaveaccountconfigResponse>;
    /**
     * Activate autoApprove in Marketplace's Account
     *
     * @remarks
     * This endpoint enables the autoapprove rule to a marketplace's whole Received SKUs module. Once enabling the rule, received SKUs will be automatically approved on your store, regardless of the seller.
     *
     *  For the autoapprove rule to work as expected, the approval [Matcher score](https://help.vtex.com/en/tutorial/entendendo-a-pontuacao-do-vtex-matcher--tutorials_424) should be set up as 80 (default value), but you can configure a different number through the field `Score` in [Save Account's Approval Settings](https://developers.vtex.com/vtex-rest-api/reference/saveaccountconfig).
     */
    saveautoapproveforaccount(req: operations.SaveautoapproveforaccountRequest, config?: AxiosRequestConfig): Promise<operations.SaveautoapproveforaccountResponse>;
    /**
     * Activate autoApprove Setting for a Seller
     *
     * @remarks
     * This endpoint enables the auto approve setting to received SKUs from a specific seller. Be aware that once enabling the rule through this request, all received SKUs from that seller will be automatically approved on your store, regardless of the Matcher Score.
     */
    saveautoapproveforaccountseller(req: operations.SaveautoapproveforaccountsellerRequest, config?: AxiosRequestConfig): Promise<operations.SaveautoapproveforaccountsellerResponse>;
}
