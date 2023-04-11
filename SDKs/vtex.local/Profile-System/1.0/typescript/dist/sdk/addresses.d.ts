import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Addresses {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create client address
     *
     * @remarks
     * Creates new address for a given client profile.
     *
     *
  > The `id` field returned by this request is the `addressId` used to retrieve or update information of a specific address later.
     *
     *
  > Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.
     */
    createClientAddress(req: operations.CreateClientAddressRequest, config?: AxiosRequestConfig): Promise<operations.CreateClientAddressResponse>;
    /**
     * Delete address
     *
     * @remarks
     * Deletes a client's address by `profileId` and `addressId`.
     *
     *
  > Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.
     */
    deleteAddress(req: operations.DeleteAddressRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAddressResponse>;
    /**
     * Get address
     *
     * @remarks
     * Retrieves information of a specific address of a given client, by its respectives `adderssId` and `profileId`.
     *
     *
  > For security and privacy reasons, this request returns masked address data. For unmasked information, see Get unmasked address.
     *
     *
  > Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.
     */
    getAddress(req: operations.GetAddressRequest, config?: AxiosRequestConfig): Promise<operations.GetAddressResponse>;
    /**
     * Get address by version
     *
     * @remarks
     * Retrieves information of a specific version address of a given client.
     *
     *
  > For security and privacy reasons, this request returns masked address data by version. For unmasked information, see Get unmasked address by version.
     *
     *
  > Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.
     */
    getAddressByVersion(req: operations.GetAddressByVersionRequest, config?: AxiosRequestConfig): Promise<operations.GetAddressByVersionResponse>;
    /**
     * Get client addresses
     *
     * @remarks
     * Retrieves information of all addresses of a given client, by its `profileId`.
     *
     *
  > For security and privacy reasons, this request returns masked address data. For unmasked information, see Get unmasked client addresses.
     *
     *
  > Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.
     */
    getClientAddresses(req: operations.GetClientAddressesRequest, config?: AxiosRequestConfig): Promise<operations.GetClientAddressesResponse>;
    /**
     * Get unmasked address
     *
     * @remarks
     * Retrieves unmasked information of a specific address of a given client, by its respectives `adderssId` and `profileId`.
     *
     *
  > Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.
     */
    getUnmaskedAddress(req: operations.GetUnmaskedAddressRequest, config?: AxiosRequestConfig): Promise<operations.GetUnmaskedAddressResponse>;
    /**
     * Get unmasked address by version
     *
     * @remarks
     * Retrieves unmasked information of a specific address version of a given client.
     *
     *
  > Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.
     */
    getUnmaskedAddressByVersion(req: operations.GetUnmaskedAddressByVersionRequest, config?: AxiosRequestConfig): Promise<operations.GetUnmaskedAddressByVersionResponse>;
    /**
     * Get unmasked client addresses
     *
     * @remarks
     * Retrieves unmasked information of all addresses of a given client, by its `profileId`.
     *
     *
  > Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.
     */
    getUnmaskedClientAddresses(req: operations.GetUnmaskedClientAddressesRequest, config?: AxiosRequestConfig): Promise<operations.GetUnmaskedClientAddressesResponse>;
    /**
     * Update client address
     *
     * @remarks
     * Updates one or more fields of an existing address for a given client profile.
     *
     *
  > Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.
     */
    updateClientAddress(req: operations.UpdateClientAddressRequest, config?: AxiosRequestConfig): Promise<operations.UpdateClientAddressResponse>;
}
