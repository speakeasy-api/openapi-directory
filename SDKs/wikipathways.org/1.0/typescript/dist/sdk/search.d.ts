import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Search {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getFindInteractions - findInteractionsFind interactions defined in WikiPathways pathways.
    **/
    getFindInteractions(req: operations.GetFindInteractionsRequest, config?: AxiosRequestConfig): Promise<operations.GetFindInteractionsResponse>;
    /**
     * getFindPathwaysByLiterature - findPathwaysByLiterature
    **/
    getFindPathwaysByLiterature(req: operations.GetFindPathwaysByLiteratureRequest, config?: AxiosRequestConfig): Promise<operations.GetFindPathwaysByLiteratureResponse>;
    /**
     * getFindPathwaysByText - findPathwaysByText
    **/
    getFindPathwaysByText(req: operations.GetFindPathwaysByTextRequest, config?: AxiosRequestConfig): Promise<operations.GetFindPathwaysByTextResponse>;
    /**
     * getFindPathwaysByXref - findPathwaysByXref
    **/
    getFindPathwaysByXref(req: operations.GetFindPathwaysByXrefRequest, config?: AxiosRequestConfig): Promise<operations.GetFindPathwaysByXrefResponse>;
    /**
     * getRemoveCurationTag - removeCurationTagRemove a curation tag from a pathway.
    **/
    getRemoveCurationTag(req: operations.GetRemoveCurationTagRequest, config?: AxiosRequestConfig): Promise<operations.GetRemoveCurationTagResponse>;
}
