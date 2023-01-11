import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class PhoneBlockedList {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * addAnumberToBlockedList - Create a blocked list
     *
     * A Zoom account owner or a user with admin privilege can block phone numbers for phone users in an account. Blocked numbers can be inbound (numbers will be blocked from calling in) and outbound (phone users in your account won't be able to dial those numbers). Blocked callers will hear a generic message stating that the person they are calling is not available.<br>Use this API to create a blocked list and add a number to that blocked list.<br>
     * **Prerequisites:**
     * * Pro or higher account plan with Zoom phone license<br>
     * **Scope:** `phone:write:admin`<br>
     *
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
    **/
    addAnumberToBlockedList(req: operations.AddAnumberToBlockedListRequest, config?: AxiosRequestConfig): Promise<operations.AddAnumberToBlockedListResponse>;
    /**
     * deleteABlockedList - Delete a blocked list
     *
     * A Zoom account owner or a user with admin privilege can block phone numbers for phone users in an account. Blocked numbers can be inbound (numbers will be blocked from calling in) and outbound (phone users in your account won't be able to dial those numbers).
     * <br>Use this API to delete a blocked list and therefore removing the associated number from the blocked list. The number will be unblocked after the deletion.<br>
     * **Prerequisites:**
     * * Pro or higher account plan with Zoom phone license<br>
     * **Scope:** `phone:write:admin`<br>
     *
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
    **/
    deleteABlockedList(req: operations.DeleteABlockedListRequest, config?: AxiosRequestConfig): Promise<operations.DeleteABlockedListResponse>;
    /**
     * getABlockedList - Get blocked list details
     *
     * A Zoom account owner or a user with admin privilege can block phone numbers for phone users in an account. Blocked numbers can be inbound (numbers will be blocked from calling in) and outbound (phone users in your account won't be able to dial those numbers). Blocked callers will hear a generic message stating that the person they are calling is not available.<br>Use this API to get information about a specific blocked list.<br>
     * **Prerequisites:**
     * * Pro or higher account plan with Zoom phone license<br>
     * **Scope:** `phone:read:admin`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
    **/
    getABlockedList(req: operations.GetABlockedListRequest, config?: AxiosRequestConfig): Promise<operations.GetABlockedListResponse>;
    /**
     * listBlockedList - List blocked lists
     *
     * A Zoom account owner or a user with admin privilege can block phone numbers for phone users in an account. Blocked numbers can be inbound (numbers will be blocked from calling in) and outbound (phone users in your account won't be able to dial those numbers). Blocked callers will hear a generic message stating that the person they are calling is not available.<br>Use this API to list all the blocked lists in an acccount.<br>
     * **Prerequisites:**
     * * Pro or higher account plan with Zoom phone license<br>
     * **Scope:** `phone:read:admin`<br>
     *
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
    **/
    listBlockedList(req: operations.ListBlockedListRequest, config?: AxiosRequestConfig): Promise<operations.ListBlockedListResponse>;
    /**
     * updateBlockedList - Update a blocked list
     *
     * A Zoom account owner or a user with admin privilege can block phone numbers for phone users in an account. Blocked numbers can be inbound (numbers will be blocked from calling in) and outbound (phone users in your account won't be able to dial those numbers). Blocked callers will hear a generic message stating that the person they are calling is not available.<br>Use this API to update information on the blocked list.<br>
     * **Prerequisites:**
     * * Pro or higher account plan with Zoom phone license<br>
     * **Scope:** `phone:write:admin`<br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     *
     *
    **/
    updateBlockedList(req: operations.UpdateBlockedListRequest, config?: AxiosRequestConfig): Promise<operations.UpdateBlockedListResponse>;
}
