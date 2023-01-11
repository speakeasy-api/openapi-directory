import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Tsp {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * tsp - Get account's TSP information
     *
     * Get information on Telephony Service Provider on an account level.<br><br>
     * **Scopes:** `tsp:read:admin` <br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     *
     * **Prerequisites:**<br>
     * * A Pro or a higher plan.
    **/
    tsp(config?: AxiosRequestConfig): Promise<operations.TspResponse>;
    /**
     * tspUpdate - Update account's TSP information
     *
     * Update information of the Telephony Service Provider set up on an account.<br>
     * **Prerequisites**:<br>
     * TSP account option should be enabled.<br>
     * **Scopes:** `tsp:write:admin`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     *
    **/
    tspUpdate(req: operations.TspUpdateRequest, config?: AxiosRequestConfig): Promise<operations.TspUpdateResponse>;
    /**
     * tspUrlUpdate - Set global dial-in URL for a TSP user
     *
     * A global dial-in page can provide a list of global access numbers using which audio conferencing can be conducted. By calling this API, you can set the url for the global dial-in page of a user whose Zoom account has TSP and special TSP with third-party audio conferencing options enabled. <p></p>
     * **Scopes:**`tsp:write:admin` `tsp:write`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     *
    **/
    tspUrlUpdate(req: operations.TspUrlUpdateRequest, config?: AxiosRequestConfig): Promise<operations.TspUrlUpdateResponse>;
    /**
     * userTsp - Get a user's TSP account
     *
     * Each user can have a maximum of two TSP accounts. Use this API to retrieve details of a specific TSP account enabled for a specific user.<br><br>
     * **Scopes:** `tsp:read:admin` `tsp:read`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     *
    **/
    userTsp(req: operations.UserTspRequest, config?: AxiosRequestConfig): Promise<operations.UserTspResponse>;
    /**
     * userTspCreate - Add a user's TSP account
     *
     * Add a user's TSP account.<br><br>
     * **Scopes:** `tsp:write:admin` `tsp:write`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     *
    **/
    userTspCreate(req: operations.UserTspCreateRequest, config?: AxiosRequestConfig): Promise<operations.UserTspCreateResponse>;
    /**
     * userTspDelete - Delete a user's TSP account
     *
     * Delete a user's TSP account.<br><br>
     * **Scopes:** `tsp:write:admin` `tsp:write`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     *
    **/
    userTspDelete(req: operations.UserTspDeleteRequest, config?: AxiosRequestConfig): Promise<operations.UserTspDeleteResponse>;
    /**
     * userTspUpdate - Update a TSP account
     *
     * Update a user's TSP account.<br><br>
     * **Scopes:** `tsp:write:admin` `tsp:write`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     *
    **/
    userTspUpdate(req: operations.UserTspUpdateRequest, config?: AxiosRequestConfig): Promise<operations.UserTspUpdateResponse>;
    /**
     * userTsPs - List user's TSP accounts
     *
     * A user can have a maximum of two TSP accounts. Use this API to list all TSP accounts of a user.<br><br>
     * **Scopes:** `tsp:read:admin` `tsp:read`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
    **/
    userTsPs(req: operations.UserTsPsRequest, config?: AxiosRequestConfig): Promise<operations.UserTsPsResponse>;
}
