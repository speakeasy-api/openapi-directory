import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Profiles {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create client profile
     *
     * @remarks
     * Creates new client profile.
     *
     *
  > Since your store's profile schema is customizable, the schema and examples presented below may differ from yours. Your integration must be adapted accordingly.
     *
     *
  > The `id` field returned by this request is the `profileId` used to retrieve information on a specific profile later.
     *
     *
  > Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.
     */
    createClientProfile(req: operations.CreateClientProfileRequest, config?: AxiosRequestConfig): Promise<operations.CreateClientProfileResponse>;
    /**
     * Delete client profile
     *
     * @remarks
     * Deletes a client profile by `profileId`.
     *
     *
  > Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.
     */
    deleteClientProfile(req: operations.DeleteClientProfileRequest, config?: AxiosRequestConfig): Promise<operations.DeleteClientProfileResponse>;
    /**
     * Get profile
     *
     * @remarks
     * Retrieves the information of a specific client, by its `profileId`.
     *
     *
  > Since your store's profile schema is customizable, the schema and examples presented below may differ from yours. Your integration must be adapted accordingly.
     *
     *
  > For security and privacy reasons, this request returns masked profile data. For unmasked information, see Get unmasked profile.
     *
     *
  > Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.
     */
    getProfile(req: operations.GetProfileRequest, config?: AxiosRequestConfig): Promise<operations.GetProfileResponse>;
    /**
     * Get profile by version
     *
     * @remarks
     * Retrieves the information of a specific version of a client profile.
     *
     *
  > Since your store's profile schema is customizable, the schema and examples presented below may differ from yours. Your integration must be adapted accordingly.
     *
     *
  > For security and privacy reasons, this request returns masked profile data. For unmasked information, see Get unmasked profile by version.
     *
     *
  > Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.
     */
    getProfileByVersion(req: operations.GetProfileByVersionRequest, config?: AxiosRequestConfig): Promise<operations.GetProfileByVersionResponse>;
    /**
     * Get unmasked profile
     *
     * @remarks
     * Retrieves unmasked information of a specific client, by its `profileId`.
     *
     *
  > Since your store's profile schema is customizable, the schema and examples presented below may differ from yours. Your integration must be adapted accordingly.
     *
     *
  > Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.
     */
    getUnmaskedProfile(req: operations.GetUnmaskedProfileRequest, config?: AxiosRequestConfig): Promise<operations.GetUnmaskedProfileResponse>;
    /**
     * Get unmasked profile by version
     *
     * @remarks
     * Retrieves unmasked information of a specific version of a client profile.
     *
     *
  > Since your store's profile schema is customizable, the schema and examples presented below may differ from yours. Your integration must be adapted accordingly.
     *
     *
  > Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.
     */
    getUnmaskedProfileByVersion(req: operations.GetUnmaskedProfileByVersionRequest, config?: AxiosRequestConfig): Promise<operations.GetUnmaskedProfileByVersionResponse>;
    /**
     * Updates client profile
     *
     * @remarks
     * Updates one or more fields of an existing client profile.
     *
     *
  > Since your store's profile schema is customizable, the schema and examples presented below may differ from yours. Your integration must be adapted accordingly.
     *
     *
  > Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.
     */
    updateClientProfile(req: operations.UpdateClientProfileRequest, config?: AxiosRequestConfig): Promise<operations.UpdateClientProfileResponse>;
}
