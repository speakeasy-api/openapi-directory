import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class PhoneSite {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create a phone site
     *
     * @remarks
     * Sites allow you to organize Zoom Phone users in your organization. Use this API to create a [Site](https://support.zoom.us/hc/en-us/articles/360020809672).<br>
     * **Prerequisites:**<br>
     * * Multiple Sites must be [enabled](https://support.zoom.us/hc/en-us/articles/360020809672-Managing-Multiple-Sites#h_05c88e35-1593-491f-b1a8-b7139a75dc15).
     * * Pro or a higher account with Zoom Phone enabled.
     * **Scope:** `phone:write:admin`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     *
     *
     */
    createPhoneSite(req: operations.CreatePhoneSiteApplicationJSON, security: operations.CreatePhoneSiteSecurity, config?: AxiosRequestConfig): Promise<operations.CreatePhoneSiteResponse>;
    /**
     * Delete a phone site
     *
     * @remarks
     * Sites allow you to organize Zoom Phone users in your organization. Use this API to delete a specific [site](https://support.zoom.us/hc/en-us/articles/360020809672) in a Zoom account. To delete a site, in the query parameter, you must provide the Site ID of another site where the assets of current site (users, numbers and phones) can be transferred to.  You cannot use this API to delete the main site.
     *
     * **Prerequisites:** <br>
     * * Account must have a Pro or a higher plan with Zoom Phone license.
     * * [Multiple Sites](https://support.zoom.us/hc/en-us/articles/360020809672-Managing-Multiple-Sites) must be enabled.<br>
     * **Scope:** `phone:write:admin`
     * <br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     *
     *
     */
    deletePhoneSite(req: operations.DeletePhoneSiteRequest, security: operations.DeletePhoneSiteSecurity, config?: AxiosRequestConfig): Promise<operations.DeletePhoneSiteResponse>;
    /**
     * Get phone site details
     *
     * @remarks
     * Sites allow you to organize Zoom Phone users in your organization. Use this API to get information about a specific [site](https://support.zoom.us/hc/en-us/articles/360020809672).
     *
     *
     * **Prerequisites:** <br>
     * * Account must have a Pro or a higher plan with Zoom Phone license.
     * * Multiple Sites must be [enabled](https://support.zoom.us/hc/en-us/articles/360020809672-Managing-Multiple-Sites#h_05c88e35-1593-491f-b1a8-b7139a75dc15).<br>
     * **Scope:** `phone:read:admin`<br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     *
     *
     */
    getASite(req: operations.GetASiteRequest, security: operations.GetASiteSecurity, config?: AxiosRequestConfig): Promise<operations.GetASiteResponse>;
    /**
     * List phone sites
     *
     * @remarks
     * Sites allow you to organize Zoom Phone users in your organization. Use this API to list all the [sites](https://support.zoom.us/hc/en-us/articles/360020809672) that have been created for an account.<br>
     * **Prerequisites:**<br>
     * * Multiple Sites must be [enabled](https://support.zoom.us/hc/en-us/articles/360020809672-Managing-Multiple-Sites#h_05c88e35-1593-491f-b1a8-b7139a75dc15).
     * * Pro or a higher account with Zoom Phone enabled.
     *
     * **Scope:** `phone:read:admin`<br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
     */
    listPhoneSites(req: operations.ListPhoneSitesRequest, config?: AxiosRequestConfig): Promise<operations.ListPhoneSitesResponse>;
    /**
     * Update phone site details
     *
     * @remarks
     * Sites allow you to organize Zoom Phone users in your organization. Use this API to update information about a specific [site](https://support.zoom.us/hc/en-us/articles/360020809672).
     *
     *
     * **Prerequisites:** <br>
     * * Account must have a Pro or a higher plan with Zoom Phone license.
     * * **Scope:** `phone:write:admin`<br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     *
     *
     */
    updateSiteDetails(req: operations.UpdateSiteDetailsRequest, security: operations.UpdateSiteDetailsSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateSiteDetailsResponse>;
}
