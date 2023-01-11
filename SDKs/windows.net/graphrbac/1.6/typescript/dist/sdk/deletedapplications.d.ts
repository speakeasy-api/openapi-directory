import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class DeletedApplications {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deletedApplicationsList - Gets a list of deleted applications in the directory.
    **/
    deletedApplicationsList(req: operations.DeletedApplicationsListRequest, config?: AxiosRequestConfig): Promise<operations.DeletedApplicationsListResponse>;
    /**
     * deletedApplicationsRestore - Restores the deleted application in the directory.
    **/
    deletedApplicationsRestore(req: operations.DeletedApplicationsRestoreRequest, config?: AxiosRequestConfig): Promise<operations.DeletedApplicationsRestoreResponse>;
}
