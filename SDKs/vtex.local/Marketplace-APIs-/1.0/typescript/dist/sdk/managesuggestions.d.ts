import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Send or delete SKU suggestions from the seller to marketplace
 */
export declare class ManageSuggestions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete SKU Suggestion
     *
     * @remarks
     * This endpoint deletes a chosen SKU suggestion. Only one SKU should be deleted per request. This request cannot be undone. A workaround to revert its action, is to send the suggestion again, through the Send Suggestion API.
     */
    deleteSuggestion(req: operations.DeleteSuggestionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSuggestionResponse>;
    /**
     * Send SKU Suggestion
     *
     * @remarks
     * This request is used by the seller when it wants to suggest that one of their SKUs is sold in the marketplace.
     *
     * Before using this request, the seller should always use the [Change Notification](https://developers.vtex.com/vtex-rest-api/reference/catalog-api-get-seller-sku-notification) request in order to check if the SKU already exists in the marketplace. If it doesn't, then this is the next call in the SKU integration flow.
     *
     * In the Send Suggestion request, the seller must send information about the SKU, such as the product and SKU name, the seller ID, and the image URL. All parameters are explained below.
     */
    saveSuggestion(req: operations.SaveSuggestionRequest, config?: AxiosRequestConfig): Promise<operations.SaveSuggestionResponse>;
}
