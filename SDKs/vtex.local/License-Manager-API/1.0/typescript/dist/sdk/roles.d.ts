import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Roles {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get List of Roles
     *
     * @remarks
     * Returns a list of available roles. The response is divided in pages. The query parameter `numItems` defines the number of items in each page, and consequently the amount of pages for the whole list.
     */
    getListRoles(req: operations.GetListRolesRequest, config?: AxiosRequestConfig): Promise<operations.GetListRolesResponse>;
    /**
     * Get Roles by User/appKey
     *
     * @remarks
     * Gets roles of a particular user or application key.
     */
    getRolesbyUser(req: operations.GetRolesbyUserRequest, config?: AxiosRequestConfig): Promise<operations.GetRolesbyUserResponse>;
    /**
     * Put Roles in User/appKey
     *
     * @remarks
     * Allows you to add roles to a particular user or application key by specifying the list of roles' IDs on the request's body.
     */
    putRolesinUser(req: operations.PutRolesinUserRequest, config?: AxiosRequestConfig): Promise<operations.PutRolesinUserResponse>;
    /**
     * Remove Role from User/appKey
     *
     * @remarks
     * Allows you to remove a role from a specific user or application key. This method only allows the removal of one role per request. The role's ID must be specified on the request path, not on the request body.
     *
     *
  > Note that a successful response returns a `204` response with an empty body. A deletion on a role or user that does not exist will also return a `204`. Thus, this method should not be used to verify the existence of a specific user or role.
     */
    removeRolefromUser(req: operations.RemoveRolefromUserRequest, config?: AxiosRequestConfig): Promise<operations.RemoveRolefromUserResponse>;
}
