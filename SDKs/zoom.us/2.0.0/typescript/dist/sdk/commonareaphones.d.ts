import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class CommonAreaPhones {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add a common area phone
     *
     * @remarks
     * A common area phone can be provisioned by a Zoom account owner or a Zoom admin so that anyone in an organization can use it. For example, if your office has shared desks that don't belong to a specific employees, you could add a common area phone so that any person can use it.<br> Use this API to [add a common area phone](https://support.zoom.us/hc/en-us/articles/360028516231-Managing-Common-Area-Phones#h_2d0da347-c35a-4993-9771-e21aaa568deb).<br><br>
     * **Prerequisites:**<br>
     * * Pro or a higher account with Zoom Phone license.
     * * Account owner or admin permissions.
     * * [Supported device](https://support.zoom.us/hc/en-us/articles/360001299063-Zoom-Voice-Supported-Devices)<br>
     * **Scope:** `phone:write:admin`<br>
     *
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     */
    addCommonAreaPhone(req: operations.AddCommonAreaPhoneRequestBody, security: operations.AddCommonAreaPhoneSecurity, config?: AxiosRequestConfig): Promise<operations.AddCommonAreaPhoneResponse>;
    /**
     * Delete a common area phone
     *
     * @remarks
     * A common area phone can be provisioned by a Zoom account owner or a Zoom admin so that anyone in an organization can use it. For example, if your office has shared desks that don't belong to a specific employees, you could add a common area phone so that any person can use it.<br> Use this API to remove the [common area phone](https://support.zoom.us/hc/en-us/articles/360028516231-Managing-Common-Area-Phones) from Zoom Phone System in an account.<br><br>**Prerequisites:**<br>
     * * Pro or a higher account with Zoom Phone license.
     * * Account owner or admin permissions.
     * * [Supported device](https://support.zoom.us/hc/en-us/articles/360001299063-Zoom-Voice-Supported-Devices)<br>
     * **Scopes:** `phone:write:admin`<br>
     *
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     */
    deleteCommonAreaPhone(req: operations.DeleteCommonAreaPhoneRequest, security: operations.DeleteCommonAreaPhoneSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteCommonAreaPhoneResponse>;
    /**
     * Get common area phone details
     *
     * @remarks
     * A common area phone can be provisioned by a Zoom account owner or a Zoom admin so that anyone in an organization can use it. For example, if your office has shared desks that don't belong to a specific employees, you could add a common area phone so that any person can use it.<br> Use this API to get details on a specific [common area phone](https://support.zoom.us/hc/en-us/articles/360028516231-Managing-Common-Area-Phones) in an account.<br>For the `commonAreaPhoneId`, use the unique identifier or the Mac address of the common area phone. The Mac address can be hyphenated (00-04-f2-5e-ec-3c) or not hyphenated (0004f25eec3c).<br><br>**Prerequisites:**<br>
     * * Pro or a higher account with Zoom Phone license.
     * * Account owner or admin permissions.
     * * [Supported device](https://support.zoom.us/hc/en-us/articles/360001299063-Zoom-Voice-Supported-Devices)<br>
     * **Scopes:** `phone:read:admin`<br>
     *
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     */
    getACommonAreaPhone(req: operations.GetACommonAreaPhoneRequest, security: operations.GetACommonAreaPhoneSecurity, config?: AxiosRequestConfig): Promise<operations.GetACommonAreaPhoneResponse>;
    /**
     * List common area phones
     *
     * @remarks
     * A common area phone can be provisioned by a Zoom account owner or a Zoom admin so that anyone in an organization can use it. For example, if your office has shared desks that don't belong to a specific employees, you could add a common area phone so that any person can use it.<br> Use this API to [list all common area phone](https://support.zoom.us/hc/en-us/articles/360028516231-Managing-Common-Area-Phones) in an account.<br><br>**Prerequisites:**<br>
     * * Pro or a higher account with Zoom Phone license.
     * * Account owner or admin permissions.
     * * [Supported device](https://support.zoom.us/hc/en-us/articles/360001299063-Zoom-Voice-Supported-Devices)<br><br>
     * **Scope:** `phone:read:admin`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
     */
    listCommonAreaPhones(req: operations.ListCommonAreaPhonesRequest, security: operations.ListCommonAreaPhonesSecurity, config?: AxiosRequestConfig): Promise<operations.ListCommonAreaPhonesResponse>;
    /**
     * Update common area phone
     *
     * @remarks
     * A common area phone can be provisioned by a Zoom account owner or a Zoom admin so that anyone in an organization can use it. For example, if your office has shared desks that don't belong to a specific employees, you could add a common area phone so that any person can use it.<br> Use this API to update details on a specific [common area phone](https://support.zoom.us/hc/en-us/articles/360028516231-Managing-Common-Area-Phones) in an account.<br><br>**Prerequisites:**<br>
     * * Pro or a higher account with Zoom Phone license.
     * * Account owner or admin permissions.
     * * [Supported device](https://support.zoom.us/hc/en-us/articles/360001299063-Zoom-Voice-Supported-Devices)<br>
     * **Scopes:** `phone:write:admin`<br>
     *
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     */
    updateCommonAreaPhone(req: operations.UpdateCommonAreaPhoneRequest, security: operations.UpdateCommonAreaPhoneSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateCommonAreaPhoneResponse>;
}
