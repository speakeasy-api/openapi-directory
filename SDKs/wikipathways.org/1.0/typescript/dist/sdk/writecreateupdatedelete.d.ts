import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class WriteCreateUpdateDelete {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getRemoveOntologyTag - removeOntologyTag
    **/
    getRemoveOntologyTag(req: operations.GetRemoveOntologyTagRequest, config?: AxiosRequestConfig): Promise<operations.GetRemoveOntologyTagResponse>;
    /**
     * getSaveCurationTag - saveCurationTag
    **/
    getSaveCurationTag(req: operations.GetSaveCurationTagRequest, config?: AxiosRequestConfig): Promise<operations.GetSaveCurationTagResponse>;
    /**
     * getSaveOntologyTag - saveOntologyTag
    **/
    getSaveOntologyTag(req: operations.GetSaveOntologyTagRequest, config?: AxiosRequestConfig): Promise<operations.GetSaveOntologyTagResponse>;
    /**
     * getUpdatePathway - updatePathwayUpdate a pathway on the wiki with the given GPML code.<br>Note: To create/modify pathways via the web service, you need to have an account with web service write permissions. Please contact us to request write access for the web service.
    **/
    getUpdatePathway(req: operations.GetUpdatePathwayRequest, config?: AxiosRequestConfig): Promise<operations.GetUpdatePathwayResponse>;
    /**
     * postCreatePathway - createPathwayCreate a new pathway on the wiki with the given GPML code.<br>Note: To create/modify pathways via the web service, you need to have an account with web service write permissions. Please contact us to request write access for the web service.
    **/
    postCreatePathway(req: operations.PostCreatePathwayRequest, config?: AxiosRequestConfig): Promise<operations.PostCreatePathwayResponse>;
}
