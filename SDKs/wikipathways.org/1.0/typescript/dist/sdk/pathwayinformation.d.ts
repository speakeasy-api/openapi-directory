import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class PathwayInformation {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getCurationTagsGet all curation tags for the given tag name. Use this method if you want to find all pathways that are tagged with a specific curation tag.
     */
    getGetCurationTags(req: operations.GetGetCurationTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetGetCurationTagsResponse>;
    /**
     * getOntologyTermsByPathway
     */
    getGetOntologyTermsByPathway(req: operations.GetGetOntologyTermsByPathwayRequest, config?: AxiosRequestConfig): Promise<operations.GetGetOntologyTermsByPathwayResponse>;
    /**
     * getPathway
     */
    getGetPathway(req: operations.GetGetPathwayRequest, config?: AxiosRequestConfig): Promise<operations.GetGetPathwayResponse>;
    /**
     * getPathwayInfoGet some general info about the pathway, such as the name, species, without downloading the GPML.
     */
    getGetPathwayInfo(req: operations.GetGetPathwayInfoRequest, config?: AxiosRequestConfig): Promise<operations.GetGetPathwayInfoResponse>;
}
