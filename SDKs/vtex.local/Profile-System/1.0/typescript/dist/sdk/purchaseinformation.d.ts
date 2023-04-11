import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class PurchaseInformation {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create purchase information
     *
     * @remarks
     * Creates purchase information for a given client profile.
     *
     *
  > Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.
     */
    createPurchaseInformation(req: operations.CreatePurchaseInformationRequest, config?: AxiosRequestConfig): Promise<operations.CreatePurchaseInformationResponse>;
    /**
     * Delete purchase information
     *
     * @remarks
     * Deletes purchase informaiton by `profileId`.
     *
     *
  > Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.
     */
    deletePurchaseInformation(req: operations.DeletePurchaseInformationRequest, config?: AxiosRequestConfig): Promise<operations.DeletePurchaseInformationResponse>;
    /**
     * Get purchase information
     *
     * @remarks
     * Retrieves purchase information of a given client, by its `profileId`.
     *
     *
  > For security and privacy reasons, this request returns masked data. For unmasked information, see Get unmasked purchase information.
     *
     *
  > Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.
     */
    getPurchaseInformation(req: operations.GetPurchaseInformationRequest, config?: AxiosRequestConfig): Promise<operations.GetPurchaseInformationResponse>;
    /**
     * Get unmasked purchase information
     *
     * @remarks
     * Retrieves unmasked purchase information of a given client, by its `profileId`.
     *
     *
  > Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.
     */
    getUnmaskedPurchaseInformation(req: operations.GetUnmaskedPurchaseInformationRequest, config?: AxiosRequestConfig): Promise<operations.GetUnmaskedPurchaseInformationResponse>;
    /**
     * Update purchase information
     *
     * @remarks
     * Updates one or more fields of existing purchase information for a given client profile.
     *
     *
  > Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.
     */
    updatePurchaseInformation(req: operations.UpdatePurchaseInformationRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePurchaseInformationResponse>;
}
