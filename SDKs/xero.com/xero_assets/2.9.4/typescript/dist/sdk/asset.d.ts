import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Asset {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * adds a fixed asset
     *
     * @remarks
     * Adds an asset to the system
     */
    createAsset(req: operations.CreateAssetRequest, security: operations.CreateAssetSecurity, config?: AxiosRequestConfig): Promise<operations.CreateAssetResponse>;
    /**
     * adds a fixed asset type
     *
     * @remarks
     * Adds an fixed asset type to the system
     */
    createAssetType(req: operations.CreateAssetTypeRequest, security: operations.CreateAssetTypeSecurity, config?: AxiosRequestConfig): Promise<operations.CreateAssetTypeResponse>;
    /**
     * Retrieves fixed asset by id
     *
     * @remarks
     * By passing in the appropriate asset id, you can search for
     * a specific fixed asset in the system
     *
     */
    getAssetById(req: operations.GetAssetByIdRequest, security: operations.GetAssetByIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetAssetByIdResponse>;
    /**
     * searches fixed asset settings
     *
     * @remarks
     * By passing in the appropriate options, you can search for available fixed asset types in the system
     */
    getAssetSettings(req: operations.GetAssetSettingsRequest, security: operations.GetAssetSettingsSecurity, config?: AxiosRequestConfig): Promise<operations.GetAssetSettingsResponse>;
    /**
     * searches fixed asset types
     *
     * @remarks
     * By passing in the appropriate options, you can search for available fixed asset types in the system
     */
    getAssetTypes(req: operations.GetAssetTypesRequest, security: operations.GetAssetTypesSecurity, config?: AxiosRequestConfig): Promise<operations.GetAssetTypesResponse>;
    /**
     * searches fixed asset
     *
     * @remarks
     * By passing in the appropriate options, you can search for available fixed asset in the system
     */
    getAssets(req: operations.GetAssetsRequest, security: operations.GetAssetsSecurity, config?: AxiosRequestConfig): Promise<operations.GetAssetsResponse>;
}
