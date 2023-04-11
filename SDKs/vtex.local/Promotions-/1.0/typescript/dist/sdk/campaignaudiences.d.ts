import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class CampaignAudiences {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get all campaign audiences
     *
     * @remarks
     * Retrieves a list of all campaign audiences and their respective configurations.
     */
    getcampaignaudiences(req: operations.GetcampaignaudiencesRequest, config?: AxiosRequestConfig): Promise<operations.GetcampaignaudiencesResponse>;
    /**
     * Get campaign audience configuration
     *
     * @remarks
     * Retrieves a specific campaign audience configuration by its ID. This API uses the campaign ID, not the campaign name.
     */
    getcampaignconfiguration(req: operations.GetcampaignconfigurationRequest, config?: AxiosRequestConfig): Promise<operations.GetcampaignconfigurationResponse>;
    /**
     * Create campaign audience
     *
     * @remarks
     * Creates a new campaign audience.
     */
    setcampaignconfiguration(req: operations.SetcampaignconfigurationRequest, config?: AxiosRequestConfig): Promise<operations.SetcampaignconfigurationResponse>;
}
