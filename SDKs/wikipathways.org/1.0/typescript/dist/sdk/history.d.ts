import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class History {
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
     * getGetPathwayHistory - getPathwayHistoryGet the revision history of a pathway.
    **/
    getGetPathwayHistory(req: operations.GetGetPathwayHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetGetPathwayHistoryResponse>;
    /**
     * getGetRecentChanges - getRecentChangesGet the recently changed pathways.<br>Note: the recent changes table only retains items for a limited time (2 months), so there is no guarantee that you will get all changes when the timestamp points to a date that is more than 2 months in the past.
    **/
    getGetRecentChanges(req: operations.GetGetRecentChangesRequest, config?: AxiosRequestConfig): Promise<operations.GetGetRecentChangesResponse>;
}
