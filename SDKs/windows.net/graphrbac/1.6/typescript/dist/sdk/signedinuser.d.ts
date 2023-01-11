import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class SignedInUser {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * signedInUserGet - Gets the details for the currently logged-in user.
    **/
    signedInUserGet(req: operations.SignedInUserGetRequest, config?: AxiosRequestConfig): Promise<operations.SignedInUserGetResponse>;
    /**
     * signedInUserListOwnedObjects - Get the list of directory objects that are owned by the user.
    **/
    signedInUserListOwnedObjects(req: operations.SignedInUserListOwnedObjectsRequest, config?: AxiosRequestConfig): Promise<operations.SignedInUserListOwnedObjectsResponse>;
}
