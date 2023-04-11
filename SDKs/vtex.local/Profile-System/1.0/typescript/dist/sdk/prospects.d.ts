import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Prospects {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create prospect
     *
     * @remarks
     * Creates new prospect.
     *
     *
  > The `id` field returned by this request is the `prospectId` used to retrieve information on a specific prospect later.
     *
     *
  > Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.
     */
    createProspect(req: operations.CreateProspectRequest, config?: AxiosRequestConfig): Promise<operations.CreateProspectResponse>;
    /**
     * Delete prospect
     *
     * @remarks
     * Deletes a prospect by `prospectId`.
     *
     *
  > Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.
     */
    deleteProspect(req: operations.DeleteProspectRequest, config?: AxiosRequestConfig): Promise<operations.DeleteProspectResponse>;
    /**
     * Get prospect
     *
     * @remarks
     * Retrieves the information of a specific prospect, by its `prospectId`.
     *
     *
  > For security and privacy reasons, this request returns masked prospect data. For unmasked information, see Get unmasked prospect.
     *
     *
  > Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.
     */
    getProspect(req: operations.GetProspectRequest, config?: AxiosRequestConfig): Promise<operations.GetProspectResponse>;
    /**
     * Get unmasked prospect
     *
     * @remarks
     * Retrieves unmasked information of a specific prospect, by its `prospectId`.
     *
     *
  > Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.
     */
    getUnmaskedProspect(req: operations.GetUnmaskedProspectRequest, config?: AxiosRequestConfig): Promise<operations.GetUnmaskedProspectResponse>;
    /**
     * Update prospect
     *
     * @remarks
     * Updates one or more fields of an existing prospect.
     *
     *
  > Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.
     */
    updateProspect(req: operations.UpdateProspectRequest, config?: AxiosRequestConfig): Promise<operations.UpdateProspectResponse>;
}
