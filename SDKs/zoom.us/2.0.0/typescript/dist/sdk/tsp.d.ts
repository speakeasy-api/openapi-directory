import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * TSP operations
 */
export declare class Tsp {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get account's TSP information
     *
     * @remarks
     * Get information on Telephony Service Provider on an account level.<br><br>
     * **Scopes:** `tsp:read:admin` <br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     *
     * **Prerequisites:**<br>
     * * A Pro or a higher plan.
     */
    tsp(config?: AxiosRequestConfig): Promise<operations.TspResponse>;
    /**
     * Update account's TSP information
     *
     * @remarks
     * Update information of the Telephony Service Provider set up on an account.<br>
     * **Prerequisites**:<br>
     * TSP account option should be enabled.<br>
     * **Scopes:** `tsp:write:admin`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     *
     */
    tspUpdate(req: operations.TspUpdateApplicationJSON, config?: AxiosRequestConfig): Promise<operations.TspUpdateResponse>;
    /**
     * Set global dial-in URL for a TSP user
     *
     * @remarks
     * A global dial-in page can provide a list of global access numbers using which audio conferencing can be conducted. By calling this API, you can set the url for the global dial-in page of a user whose Zoom account has TSP and special TSP with third-party audio conferencing options enabled. <p></p>
     * **Scopes:**`tsp:write:admin` `tsp:write`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     *
     */
    tspUrlUpdate(req: operations.TspUrlUpdateRequest, security: operations.TspUrlUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.TspUrlUpdateResponse>;
    /**
     * Get a user's TSP account
     *
     * @remarks
     * Each user can have a maximum of two TSP accounts. Use this API to retrieve details of a specific TSP account enabled for a specific user.<br><br>
     * **Scopes:** `tsp:read:admin` `tsp:read`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     *
     */
    userTSP(req: operations.UserTSPRequest, config?: AxiosRequestConfig): Promise<operations.UserTSPResponse>;
    /**
     * Add a user's TSP account
     *
     * @remarks
     * Add a user's TSP account.<br><br>
     * **Scopes:** `tsp:write:admin` `tsp:write`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     *
     */
    userTSPCreate(req: operations.UserTSPCreateRequest, config?: AxiosRequestConfig): Promise<operations.UserTSPCreateResponse>;
    /**
     * Delete a user's TSP account
     *
     * @remarks
     * Delete a user's TSP account.<br><br>
     * **Scopes:** `tsp:write:admin` `tsp:write`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     *
     */
    userTSPDelete(req: operations.UserTSPDeleteRequest, config?: AxiosRequestConfig): Promise<operations.UserTSPDeleteResponse>;
    /**
     * Update a TSP account
     *
     * @remarks
     * Update a user's TSP account.<br><br>
     * **Scopes:** `tsp:write:admin` `tsp:write`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     *
     */
    userTSPUpdate(req: operations.UserTSPUpdateRequest, config?: AxiosRequestConfig): Promise<operations.UserTSPUpdateResponse>;
    /**
     * List user's TSP accounts
     *
     * @remarks
     * A user can have a maximum of two TSP accounts. Use this API to list all TSP accounts of a user.<br><br>
     * **Scopes:** `tsp:read:admin` `tsp:read`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
     */
    userTSPs(req: operations.UserTSPsRequest, config?: AxiosRequestConfig): Promise<operations.UserTSPsResponse>;
}
