import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class User {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * usersCreate - Create a new user.
    **/
    usersCreate(req: operations.UsersCreateRequest, config?: AxiosRequestConfig): Promise<operations.UsersCreateResponse>;
    /**
     * usersDelete - Delete a user.
    **/
    usersDelete(req: operations.UsersDeleteRequest, config?: AxiosRequestConfig): Promise<operations.UsersDeleteResponse>;
    /**
     * usersGet - Gets user information from the directory.
    **/
    usersGet(req: operations.UsersGetRequest, config?: AxiosRequestConfig): Promise<operations.UsersGetResponse>;
    /**
     * usersGetMemberGroups - Gets a collection that contains the object IDs of the groups of which the user is a member.
    **/
    usersGetMemberGroups(req: operations.UsersGetMemberGroupsRequest, config?: AxiosRequestConfig): Promise<operations.UsersGetMemberGroupsResponse>;
    /**
     * usersList - Gets list of users for the current tenant.
    **/
    usersList(req: operations.UsersListRequest, config?: AxiosRequestConfig): Promise<operations.UsersListResponse>;
    /**
     * usersUpdate - Updates a user.
    **/
    usersUpdate(req: operations.UsersUpdateRequest, config?: AxiosRequestConfig): Promise<operations.UsersUpdateResponse>;
}
