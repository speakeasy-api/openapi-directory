import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ImGroups {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * imGroup - Retrieve an IM directory group
     *
     * Retrieve an [IM directory group](https://support.zoom.us/hc/en-us/articles/203749815-IM-Management) under your account.<br><br>
     * Scopes: `imgroup:read:admin`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
    **/
    imGroup(req: operations.ImGroupRequest, config?: AxiosRequestConfig): Promise<operations.ImGroupResponse>;
    /**
     * imGroupCreate - Create an IM directory group
     *
     * Create an [IM directory group](https://support.zoom.us/hc/en-us/articles/203749815-IM-Management) under your account.<br><br>
     * **Scopes**: `imgroup:write:admin`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
    **/
    imGroupCreate(req: operations.ImGroupCreateRequest, config?: AxiosRequestConfig): Promise<operations.ImGroupCreateResponse>;
    /**
     * imGroupDelete - Delete an IM directory group
     *
     * Delete an [IM directory group](https://support.zoom.us/hc/en-us/articles/203749815-IM-Management) under your account.<br><br>
     * Scopes: `imgroup:write:admin`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
    **/
    imGroupDelete(req: operations.ImGroupDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ImGroupDeleteResponse>;
    /**
     * imGroupMembers - List IM directory group members
     *
     * List the members of an [IM directory group](https://support.zoom.us/hc/en-us/articles/203749815-IM-Management).<br><br>
     * **Scope:** `imgroup:read:admin`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
    **/
    imGroupMembers(req: operations.ImGroupMembersRequest, config?: AxiosRequestConfig): Promise<operations.ImGroupMembersResponse>;
    /**
     * imGroupMembersCreate - Add IM directory group members
     *
     * Add members to an [IM directory group](https://support.zoom.us/hc/en-us/articles/203749815-IM-Management) under an account.<br><br>
     * **Scope:** `imgroup:write:admin`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
    **/
    imGroupMembersCreate(req: operations.ImGroupMembersCreateRequest, config?: AxiosRequestConfig): Promise<operations.ImGroupMembersCreateResponse>;
    /**
     * imGroupMembersDelete - Delete an IM directory group member
     *
     * Delete a member from an [IM directory group](https://support.zoom.us/hc/en-us/articles/203749815-IM-Management) under an account.<br><br>
     * Scopes: `imgroup:write:admin`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
    **/
    imGroupMembersDelete(req: operations.ImGroupMembersDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ImGroupMembersDeleteResponse>;
    /**
     * imGroupUpdate - Update an IM directory group
     *
     * Update an [IM directory group](https://support.zoom.us/hc/en-us/articles/203749815-IM-Management) under your account.<br><br>
     * **Scopes**: `imgroup:write:admin`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
    **/
    imGroupUpdate(req: operations.ImGroupUpdateRequest, config?: AxiosRequestConfig): Promise<operations.ImGroupUpdateResponse>;
    /**
     * imGroups - List IM directory groups
     *
     * List [IM directory groups](https://support.zoom.us/hc/en-us/articles/203749815-IM-Management).<br><br>
     * **Scopes**: `imgroup:read:admin`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
    **/
    imGroups(config?: AxiosRequestConfig): Promise<operations.ImGroupsResponse>;
}
