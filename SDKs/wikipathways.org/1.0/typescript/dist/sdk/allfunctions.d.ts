import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class AllFunctions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * findInteractionsFind interactions defined in WikiPathways pathways.
     */
    getFindInteractions(req: operations.GetFindInteractionsRequest, config?: AxiosRequestConfig): Promise<operations.GetFindInteractionsResponse>;
    /**
     * findPathwaysByLiterature
     */
    getFindPathwaysByLiterature(req: operations.GetFindPathwaysByLiteratureRequest, config?: AxiosRequestConfig): Promise<operations.GetFindPathwaysByLiteratureResponse>;
    /**
     * findPathwaysByText
     */
    getFindPathwaysByText(req: operations.GetFindPathwaysByTextRequest, config?: AxiosRequestConfig): Promise<operations.GetFindPathwaysByTextResponse>;
    /**
     * findPathwaysByXref
     */
    getFindPathwaysByXref(req: operations.GetFindPathwaysByXrefRequest, config?: AxiosRequestConfig): Promise<operations.GetFindPathwaysByXrefResponse>;
    /**
     * getColoredPathwayGet a colored image version of the pathway.
     */
    getGetColoredPathway(req: operations.GetGetColoredPathwayRequest, config?: AxiosRequestConfig): Promise<operations.GetGetColoredPathwayResponse>;
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
     * getPathway
     */
    getGetPathway(req: operations.GetGetPathwayRequest, config?: AxiosRequestConfig): Promise<operations.GetGetPathwayResponse>;
    /**
     * getPathwayAsDownload a pathway in the specified file format.
     */
    getGetPathwayAs(req: operations.GetGetPathwayAsRequest, config?: AxiosRequestConfig): Promise<operations.GetGetPathwayAsResponse>;
    /**
     * getPathwayHistoryGet the revision history of a pathway.
     */
    getGetPathwayHistory(req: operations.GetGetPathwayHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetGetPathwayHistoryResponse>;
    /**
     * getPathwayInfoGet some general info about the pathway, such as the name, species, without downloading the GPML.
     */
    getGetPathwayInfo(req: operations.GetGetPathwayInfoRequest, config?: AxiosRequestConfig): Promise<operations.GetGetPathwayInfoResponse>;
    /**
     * getPathwaysByOntologyTerm
     */
    getGetPathwaysByOntologyTerm(req: operations.GetGetPathwaysByOntologyTermRequest, config?: AxiosRequestConfig): Promise<operations.GetGetPathwaysByOntologyTermResponse>;
    /**
     * getPathwaysByParentOntologyTerm
     */
    getGetPathwaysByParentOntologyTerm(req: operations.GetGetPathwaysByParentOntologyTermRequest, config?: AxiosRequestConfig): Promise<operations.GetGetPathwaysByParentOntologyTermResponse>;
    /**
     * getRecentChangesGet the recently changed pathways.<br>Note: the recent changes table only retains items for a limited time (2 months), so there is no guarantee that you will get all changes when the timestamp points to a date that is more than 2 months in the past.
     */
    getGetRecentChanges(req: operations.GetGetRecentChangesRequest, config?: AxiosRequestConfig): Promise<operations.GetGetRecentChangesResponse>;
    /**
     * getUserByOrcid
     */
    getGetUserByOrcid(req: operations.GetGetUserByOrcidRequest, config?: AxiosRequestConfig): Promise<operations.GetGetUserByOrcidResponse>;
    /**
     * getXrefList
     */
    getGetXrefList(req: operations.GetGetXrefListRequest, config?: AxiosRequestConfig): Promise<operations.GetGetXrefListResponse>;
    /**
     * listOrganisms
     */
    getListOrganisms(req: operations.GetListOrganismsRequest, config?: AxiosRequestConfig): Promise<operations.GetListOrganismsResponse>;
    /**
     * listPathways
     */
    getListPathways(req: operations.GetListPathwaysRequest, config?: AxiosRequestConfig): Promise<operations.GetListPathwaysResponse>;
    /**
     * loginStart a logged in session, using an existing WikiPathways account. This function will return an authentication code that can be used to excecute methods that need authentication (e.g. updatePathway).
     */
    getLogin(req: operations.GetLoginRequest, config?: AxiosRequestConfig): Promise<operations.GetLoginResponse>;
    /**
     * removeCurationTagRemove a curation tag from a pathway.
     */
    getRemoveCurationTag(req: operations.GetRemoveCurationTagRequest, config?: AxiosRequestConfig): Promise<operations.GetRemoveCurationTagResponse>;
    /**
     * removeOntologyTag
     */
    getRemoveOntologyTag(req: operations.GetRemoveOntologyTagRequest, config?: AxiosRequestConfig): Promise<operations.GetRemoveOntologyTagResponse>;
    /**
     * saveCurationTag
     */
    getSaveCurationTag(req: operations.GetSaveCurationTagRequest, config?: AxiosRequestConfig): Promise<operations.GetSaveCurationTagResponse>;
    /**
     * saveOntologyTag
     */
    getSaveOntologyTag(req: operations.GetSaveOntologyTagRequest, config?: AxiosRequestConfig): Promise<operations.GetSaveOntologyTagResponse>;
    /**
     * updatePathwayUpdate a pathway on the wiki with the given GPML code.<br>Note: To create/modify pathways via the web service, you need to have an account with web service write permissions. Please contact us to request write access for the web service.
     */
    getUpdatePathway(req: operations.GetUpdatePathwayRequest, config?: AxiosRequestConfig): Promise<operations.GetUpdatePathwayResponse>;
    /**
     * createPathwayCreate a new pathway on the wiki with the given GPML code.<br>Note: To create/modify pathways via the web service, you need to have an account with web service write permissions. Please contact us to request write access for the web service.
     */
    postCreatePathway(req: operations.PostCreatePathwayRequest, config?: AxiosRequestConfig): Promise<operations.PostCreatePathwayResponse>;
}
