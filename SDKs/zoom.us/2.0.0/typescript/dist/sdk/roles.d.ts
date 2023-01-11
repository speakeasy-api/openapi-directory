import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Roles {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * addRoleMembers - Assign a role
     *
     * User [roles](https://support.zoom.us/hc/en-us/articles/115001078646-Role-Based-Access-Control) can have a set of permissions that allows access only to the pages a user needs to view or edit. Use this API to [assign a role](https://support.zoom.us/hc/en-us/articles/115001078646-Role-Based-Access-Control#h_748b6fd8-5057-4cf4-bbfd-787909c09db0) to members.
     *
     * **Scopes:** `role:write:admin`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`<br>
     * **Prerequisites:**<br>
     * * A Pro or a higher plan.
    **/
    addRoleMembers(req: operations.AddRoleMembersRequest, config?: AxiosRequestConfig): Promise<operations.AddRoleMembersResponse>;
    /**
     * createRole - Create a role
     *
     * Each Zoom user automatically has a role which can either be owner, administrator, or a member.
     *
     * **Pre-requisite:**<br>
     * * Pro or higher plan.
     * * For setting the initial role, you must be the Account Owner.<br>
     * * For subsequent role management, you must be the Account Owner or user with role management permissions.<br>
     * **Scopes:** `role:write:admin`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
    **/
    createRole(req: operations.CreateRoleRequest, config?: AxiosRequestConfig): Promise<operations.CreateRoleResponse>;
    /**
     * deleteRole - Delete a role
     *
     * Each Zoom user automatically has a role which can either be owner, administrator, or a member. Account Owners and users with edit privileges for Role management can add customized roles with a list.
     *
     * Use this API to delete a role.<br>
     * **Pre-requisite:**<br>
     * * A Pro or higher plan.<br>
     * * For role management and updates, you must be the Account Owner or user with role management permissions.
     *
     * **Scopes:** `role:write:admin`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
    **/
    deleteRole(req: operations.DeleteRoleRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRoleResponse>;
    /**
     * getRoleInformation - Get role information
     *
     * Each Zoom user automatically has a role which can either be owner, administrator, or a member. Account Owners and users with edit privileges for Role management can add customized roles with a list of privileges.
     *
     * Use this API to get information including specific privileges assigned to a [role](https://support.zoom.us/hc/en-us/articles/115001078646-Role-Based-Access-Control).<br>
     * **Pre-requisite:**<br>
     * * A Pro or higher plan.<br>
     * * For role management and updates, you must be the Account Owner or user with role management permissions.
     *
     * **Scopes:** `role:read:admin`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
    **/
    getRoleInformation(req: operations.GetRoleInformationRequest, config?: AxiosRequestConfig): Promise<operations.GetRoleInformationResponse>;
    /**
     * roleMemberDelete - Unassign a role
     *
     * User [roles](https://support.zoom.us/hc/en-us/articles/115001078646-Role-Based-Access-Control) can have a set of permissions that allows access only to the pages a user needs to view or edit. Use this API to unassign a user's role.
     *
     * **Scope:** `role:write:admin`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
     * **Prerequisites:**<br>
     * * A Pro or a higher plan.
    **/
    roleMemberDelete(req: operations.RoleMemberDeleteRequest, config?: AxiosRequestConfig): Promise<operations.RoleMemberDeleteResponse>;
    /**
     * roleMembers - List members in a role
     *
     * User [roles](https://support.zoom.us/hc/en-us/articles/115001078646-Role-Based-Access-Control) can have a set of permissions that allows access only to the pages a user needs to view or edit. Use this API to list all the members that are assigned a specific role.
     *
     * **Scope:** `role:read:admin`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`<br>**Prerequisites:**<br>
     * * A Pro or a higher plan.
    **/
    roleMembers(req: operations.RoleMembersRequest, config?: AxiosRequestConfig): Promise<operations.RoleMembersResponse>;
    /**
     * roles - List roles
     *
     * List [roles](https://support.zoom.us/hc/en-us/articles/115001078646-Role-Based-Access-Control) on your account
     *
     * **Scopes:** `role:read:admin`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`<br>
     * **Prerequisites** :
     * *  Pro or higher plan.
     * *  For setting the initial role, you must be the Account Owner.
     * *  For subsequent role management, you must be the Account Owner or user with role management permissions.
    **/
    roles(req: operations.RolesRequest, config?: AxiosRequestConfig): Promise<operations.RolesResponse>;
    /**
     * updateRole - Update role information
     *
     * Each Zoom user automatically has a [role](https://support.zoom.us/hc/en-us/articles/115001078646-Role-Based-Access-Control) which can either be owner, administrator, or a member. Account Owners and users with edit privileges for Role management can add customized roles with a list.
     *
     * Use this API to change the privileges, name and description of a specific role.<br>
     * **Pre-requisite:**<br>
     * * A Pro or higher plan.<br>
     * * For role management and updates, you must be the Account Owner or user with role management permissions.<br>**Scopes:** `role:write:admin`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
    **/
    updateRole(req: operations.UpdateRoleRequest, config?: AxiosRequestConfig): Promise<operations.UpdateRoleResponse>;
}
