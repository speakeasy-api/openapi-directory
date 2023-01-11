import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class OntologyTags {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getGetPathwaysByOntologyTerm - getPathwaysByOntologyTerm
    **/
    getGetPathwaysByOntologyTerm(req: operations.GetGetPathwaysByOntologyTermRequest, config?: AxiosRequestConfig): Promise<operations.GetGetPathwaysByOntologyTermResponse>;
    /**
     * getGetPathwaysByParentOntologyTerm - getPathwaysByParentOntologyTerm
    **/
    getGetPathwaysByParentOntologyTerm(req: operations.GetGetPathwaysByParentOntologyTermRequest, config?: AxiosRequestConfig): Promise<operations.GetGetPathwaysByParentOntologyTermResponse>;
    /**
     * getRemoveOntologyTag - removeOntologyTag
    **/
    getRemoveOntologyTag(req: operations.GetRemoveOntologyTagRequest, config?: AxiosRequestConfig): Promise<operations.GetRemoveOntologyTagResponse>;
    /**
     * getSaveOntologyTag - saveOntologyTag
    **/
    getSaveOntologyTag(req: operations.GetSaveOntologyTagRequest, config?: AxiosRequestConfig): Promise<operations.GetSaveOntologyTagResponse>;
}
