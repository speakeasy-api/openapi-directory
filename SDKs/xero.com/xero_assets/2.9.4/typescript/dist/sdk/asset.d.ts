import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Asset {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createAsset - adds a fixed asset
     *
     * Adds an asset to the system
    **/
    createAsset(req: operations.CreateAssetRequest, config?: AxiosRequestConfig): Promise<operations.CreateAssetResponse>;
    /**
     * createAssetType - adds a fixed asset type
     *
     * Adds an fixed asset type to the system
    **/
    createAssetType(req: operations.CreateAssetTypeRequest, config?: AxiosRequestConfig): Promise<operations.CreateAssetTypeResponse>;
    /**
     * getAssetById - Retrieves fixed asset by id
     *
     * By passing in the appropriate asset id, you can search for
     * a specific fixed asset in the system
     *
    **/
    getAssetById(req: operations.GetAssetByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetAssetByIdResponse>;
    /**
     * getAssetSettings - searches fixed asset settings
     *
     * By passing in the appropriate options, you can search for available fixed asset types in the system
    **/
    getAssetSettings(req: operations.GetAssetSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetAssetSettingsResponse>;
    /**
     * getAssetTypes - searches fixed asset types
     *
     * By passing in the appropriate options, you can search for available fixed asset types in the system
    **/
    getAssetTypes(req: operations.GetAssetTypesRequest, config?: AxiosRequestConfig): Promise<operations.GetAssetTypesResponse>;
    /**
     * getAssets - searches fixed asset
     *
     * By passing in the appropriate options, you can search for available fixed asset in the system
    **/
    getAssets(req: operations.GetAssetsRequest, config?: AxiosRequestConfig): Promise<operations.GetAssetsResponse>;
}
