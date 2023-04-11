import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * IM Group operations
 */
export declare class IMGroups {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieve an IM directory group
     *
     * @remarks
     * Retrieve an [IM directory group](https://support.zoom.us/hc/en-us/articles/203749815-IM-Management) under your account.<br><br>
     * Scopes: `imgroup:read:admin`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     */
    imGroup(req: operations.ImGroupRequest, config?: AxiosRequestConfig): Promise<operations.ImGroupResponse>;
    /**
     * Create an IM directory group
     *
     * @remarks
     * Create an [IM directory group](https://support.zoom.us/hc/en-us/articles/203749815-IM-Management) under your account.<br><br>
     * **Scopes**: `imgroup:write:admin`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     */
    imGroupCreate(req: operations.ImGroupCreateApplicationJSON, config?: AxiosRequestConfig): Promise<operations.ImGroupCreateResponse>;
    /**
     * Delete an IM directory group
     *
     * @remarks
     * Delete an [IM directory group](https://support.zoom.us/hc/en-us/articles/203749815-IM-Management) under your account.<br><br>
     * Scopes: `imgroup:write:admin`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     */
    imGroupDelete(req: operations.ImGroupDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ImGroupDeleteResponse>;
    /**
     * List IM directory group members
     *
     * @remarks
     * List the members of an [IM directory group](https://support.zoom.us/hc/en-us/articles/203749815-IM-Management).<br><br>
     * **Scope:** `imgroup:read:admin`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
     */
    imGroupMembers(req: operations.ImGroupMembersRequest, security: operations.ImGroupMembersSecurity, config?: AxiosRequestConfig): Promise<operations.ImGroupMembersResponse>;
    /**
     * Add IM directory group members
     *
     * @remarks
     * Add members to an [IM directory group](https://support.zoom.us/hc/en-us/articles/203749815-IM-Management) under an account.<br><br>
     * **Scope:** `imgroup:write:admin`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
     */
    imGroupMembersCreate(req: operations.ImGroupMembersCreateRequest, security: operations.ImGroupMembersCreateSecurity, config?: AxiosRequestConfig): Promise<operations.ImGroupMembersCreateResponse>;
    /**
     * Delete an IM directory group member
     *
     * @remarks
     * Delete a member from an [IM directory group](https://support.zoom.us/hc/en-us/articles/203749815-IM-Management) under an account.<br><br>
     * Scopes: `imgroup:write:admin`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     */
    imGroupMembersDelete(req: operations.ImGroupMembersDeleteRequest, security: operations.ImGroupMembersDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ImGroupMembersDeleteResponse>;
    /**
     * Update an IM directory group
     *
     * @remarks
     * Update an [IM directory group](https://support.zoom.us/hc/en-us/articles/203749815-IM-Management) under your account.<br><br>
     * **Scopes**: `imgroup:write:admin`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     */
    imGroupUpdate(req: operations.ImGroupUpdateRequest, config?: AxiosRequestConfig): Promise<operations.ImGroupUpdateResponse>;
    /**
     * List IM directory groups
     *
     * @remarks
     * List [IM directory groups](https://support.zoom.us/hc/en-us/articles/203749815-IM-Management).<br><br>
     * **Scopes**: `imgroup:read:admin`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
     */
    imGroups(config?: AxiosRequestConfig): Promise<operations.ImGroupsResponse>;
}
