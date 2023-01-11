import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class CurationTags {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getGetCurationTagHistory - getCurationTagHistory
    **/
    getGetCurationTagHistory(req: operations.GetGetCurationTagHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetGetCurationTagHistoryResponse>;
    /**
     * getGetCurationTags - getCurationTagsGet all curation tags for the given tag name. Use this method if you want to find all pathways that are tagged with a specific curation tag.
    **/
    getGetCurationTags(req: operations.GetGetCurationTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetGetCurationTagsResponse>;
    /**
     * getGetCurationTagsByName - getCurationTagsByNameGet all curation tags for the given tag name. Use this method if you want to find all pathways that are tagged with a specific curation tag.
    **/
    getGetCurationTagsByName(req: operations.GetGetCurationTagsByNameRequest, config?: AxiosRequestConfig): Promise<operations.GetGetCurationTagsByNameResponse>;
    /**
     * getGetOntologyTermsByPathway - getOntologyTermsByPathway
    **/
    getGetOntologyTermsByPathway(req: operations.GetGetOntologyTermsByPathwayRequest, config?: AxiosRequestConfig): Promise<operations.GetGetOntologyTermsByPathwayResponse>;
    /**
     * getSaveCurationTag - saveCurationTag
    **/
    getSaveCurationTag(req: operations.GetSaveCurationTagRequest, config?: AxiosRequestConfig): Promise<operations.GetSaveCurationTagResponse>;
}
