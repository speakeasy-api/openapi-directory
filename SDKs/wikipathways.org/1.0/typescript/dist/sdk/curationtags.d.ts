import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class CurationTags {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getCurationTagHistory
     */
    getGetCurationTagHistory(req: operations.GetGetCurationTagHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetGetCurationTagHistoryResponse>;
    /**
     * getCurationTagsGet all curation tags for the given tag name. Use this method if you want to find all pathways that are tagged with a specific curation tag.
     */
    getGetCurationTags(req: operations.GetGetCurationTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetGetCurationTagsResponse>;
    /**
     * getCurationTagsByNameGet all curation tags for the given tag name. Use this method if you want to find all pathways that are tagged with a specific curation tag.
     */
    getGetCurationTagsByName(req: operations.GetGetCurationTagsByNameRequest, config?: AxiosRequestConfig): Promise<operations.GetGetCurationTagsByNameResponse>;
    /**
     * getOntologyTermsByPathway
     */
    getGetOntologyTermsByPathway(req: operations.GetGetOntologyTermsByPathwayRequest, config?: AxiosRequestConfig): Promise<operations.GetGetOntologyTermsByPathwayResponse>;
    /**
     * saveCurationTag
     */
    getSaveCurationTag(req: operations.GetSaveCurationTagRequest, config?: AxiosRequestConfig): Promise<operations.GetSaveCurationTagResponse>;
}
