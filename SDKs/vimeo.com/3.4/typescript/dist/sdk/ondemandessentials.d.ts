import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class OnDemandEssentials {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create an On Demand page
     */
    createVod(req: operations.CreateVodRequest, config?: AxiosRequestConfig): Promise<operations.CreateVodResponse>;
    /**
     * Create an On Demand page
     */
    createVodAlt1(req: operations.CreateVodAlt1RequestBody, config?: AxiosRequestConfig): Promise<operations.CreateVodAlt1Response>;
    /**
     * Delete a draft of an On Demand page
     */
    deleteVodDraft(req: operations.DeleteVodDraftRequest, security: operations.DeleteVodDraftSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteVodDraftResponse>;
    /**
     * Edit an On Demand page
     *
     * @remarks
     * Enable preorders or publish the page.
     */
    editVod(req: operations.EditVodRequest, security: operations.EditVodSecurity, config?: AxiosRequestConfig): Promise<operations.EditVodResponse>;
    /**
     * Get all the On Demand pages of a user
     */
    getUserVods(req: operations.GetUserVodsRequest, config?: AxiosRequestConfig): Promise<operations.GetUserVodsResponse>;
    /**
     * Get all the On Demand pages of a user
     */
    getUserVodsAlt1(req: operations.GetUserVodsAlt1Request, config?: AxiosRequestConfig): Promise<operations.GetUserVodsAlt1Response>;
    /**
     * Get a specific On Demand page
     */
    getVod(req: operations.GetVodRequest, config?: AxiosRequestConfig): Promise<operations.GetVodResponse>;
}
