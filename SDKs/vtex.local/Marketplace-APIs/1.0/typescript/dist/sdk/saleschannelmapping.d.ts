import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Mapping between a marketplace's sales channel and a seller's affiliate.
 */
export declare class SalesChannelMapping {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get Sales Channel Mapping Data
     *
     * @remarks
     * Retrieves information about the mapping between marketplace's sales channels and a specific seller.
     */
    retrieveMapping(req: operations.RetrieveMappingRequest, config?: AxiosRequestConfig): Promise<operations.RetrieveMappingResponse>;
    /**
     * Upsert Sales Channel Mapping
     *
     * @remarks
     * This endpoint allows the marketplace to map its sales channels with a seller's [affiliate](https://help.vtex.com/en/tutorial/configuring-affiliates--tutorials_187). The seller can have multiple sales channels associated with the same marketplace, by creating different affiliates. The mapping enables the seller to segment catalog, prices, inventory, logistics, and payments in the marketplace.
     */
    upsertMapping(req: operations.UpsertMappingRequest, config?: AxiosRequestConfig): Promise<operations.UpsertMappingResponse>;
}
