import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class OntologyTags {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getPathwaysByOntologyTerm
     */
    getGetPathwaysByOntologyTerm(req: operations.GetGetPathwaysByOntologyTermRequest, config?: AxiosRequestConfig): Promise<operations.GetGetPathwaysByOntologyTermResponse>;
    /**
     * getPathwaysByParentOntologyTerm
     */
    getGetPathwaysByParentOntologyTerm(req: operations.GetGetPathwaysByParentOntologyTermRequest, config?: AxiosRequestConfig): Promise<operations.GetGetPathwaysByParentOntologyTermResponse>;
    /**
     * removeOntologyTag
     */
    getRemoveOntologyTag(req: operations.GetRemoveOntologyTagRequest, config?: AxiosRequestConfig): Promise<operations.GetRemoveOntologyTagResponse>;
    /**
     * saveOntologyTag
     */
    getSaveOntologyTag(req: operations.GetSaveOntologyTagRequest, config?: AxiosRequestConfig): Promise<operations.GetSaveOntologyTagResponse>;
}
