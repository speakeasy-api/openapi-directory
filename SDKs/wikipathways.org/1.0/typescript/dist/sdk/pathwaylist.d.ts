import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class PathwayList {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getGetCurationTagsByName - getCurationTagsByNameGet all curation tags for the given tag name. Use this method if you want to find all pathways that are tagged with a specific curation tag.
    **/
    getGetCurationTagsByName(req: operations.GetGetCurationTagsByNameRequest, config?: AxiosRequestConfig): Promise<operations.GetGetCurationTagsByNameResponse>;
    /**
     * getGetPathwaysByOntologyTerm - getPathwaysByOntologyTerm
    **/
    getGetPathwaysByOntologyTerm(req: operations.GetGetPathwaysByOntologyTermRequest, config?: AxiosRequestConfig): Promise<operations.GetGetPathwaysByOntologyTermResponse>;
    /**
     * getGetPathwaysByParentOntologyTerm - getPathwaysByParentOntologyTerm
    **/
    getGetPathwaysByParentOntologyTerm(req: operations.GetGetPathwaysByParentOntologyTermRequest, config?: AxiosRequestConfig): Promise<operations.GetGetPathwaysByParentOntologyTermResponse>;
    /**
     * getListPathways - listPathways
    **/
    getListPathways(req: operations.GetListPathwaysRequest, config?: AxiosRequestConfig): Promise<operations.GetListPathwaysResponse>;
}
