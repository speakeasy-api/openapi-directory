import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Operations on stub mappings
 *
 * @see {@link http://wiremock.org/docs/stubbing/} - User documentation
 */
export declare class StubMappings {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete all stub mappings
     */
    deleteAdminMappings(config?: AxiosRequestConfig): Promise<operations.DeleteAdminMappingsResponse>;
    /**
     * Delete a stub mapping
     */
    deleteAdminMappingsStubMappingId(req: operations.DeleteAdminMappingsStubMappingIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAdminMappingsStubMappingIdResponse>;
    /**
     * Get all stub mappings
     */
    getAdminMappings(req: operations.GetAdminMappingsRequest, config?: AxiosRequestConfig): Promise<operations.GetAdminMappingsResponse>;
    /**
     * Get stub mapping by ID
     */
    getAdminMappingsStubMappingId(req: operations.GetAdminMappingsStubMappingIdRequest, config?: AxiosRequestConfig): Promise<operations.GetAdminMappingsStubMappingIdResponse>;
    /**
     * Create a new stub mapping
     */
    postAdminMappings(req: operations.PostAdminMappingsRequestBody, config?: AxiosRequestConfig): Promise<operations.PostAdminMappingsResponse>;
    /**
     * Find stubs by matching on their metadata
     */
    postAdminMappingsFindByMetadata(req: any, config?: AxiosRequestConfig): Promise<operations.PostAdminMappingsFindByMetadataResponse>;
    /**
     * Import stub mappings
     *
     * @remarks
     * Import given stub mappings to the backing store
     */
    postAdminMappingsImport(config?: AxiosRequestConfig): Promise<operations.PostAdminMappingsImportResponse>;
    /**
     * Delete stub mappings matching metadata
     */
    postAdminMappingsRemoveByMetadata(req: any, config?: AxiosRequestConfig): Promise<operations.PostAdminMappingsRemoveByMetadataResponse>;
    /**
     * Reset stub mappings
     *
     * @remarks
     * Restores stub mappings to the defaults defined back in the backing store
     */
    postAdminMappingsReset(config?: AxiosRequestConfig): Promise<operations.PostAdminMappingsResetResponse>;
    /**
     * Persist stub mappings
     *
     * @remarks
     * Save all persistent stub mappings to the backing store
     */
    postAdminMappingsSave(config?: AxiosRequestConfig): Promise<operations.PostAdminMappingsSaveResponse>;
    /**
     * Update a stub mapping
     */
    putAdminMappingsStubMappingId(req: operations.PutAdminMappingsStubMappingIdRequest, config?: AxiosRequestConfig): Promise<operations.PutAdminMappingsStubMappingIdResponse>;
}
