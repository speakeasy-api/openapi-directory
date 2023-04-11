import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class SIPPhone {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Enable SIP phone
     *
     * @remarks
     * Zoom’s Phone System Integration (PSI), also referred as SIP phones, enables an organization to leverage the Zoom client to complete a softphone registration to supported premise based PBX system. End users will have the ability to have softphone functionality within a single client while maintaining a comparable interface to Zoom Phone. Use this API to enable a user to use SIP phone.<br><br>
     * **Prerequisites**:
     * * Currently only supported on Cisco and Avaya PBX systems.
     * * The account owner or account admin must first enable SIP Phone Integration by contacting the [Sales](https://zoom.us/contactsales) team.<br> **Scope:** `sip_phone:write:admin`
     * <br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     *
     *
     */
    createSIPPhone(req: operations.CreateSIPPhoneApplicationJSON, security: operations.CreateSIPPhoneSecurity, config?: AxiosRequestConfig): Promise<operations.CreateSIPPhoneResponse>;
    /**
     * Delete SIP phone
     *
     * @remarks
     * Zoom’s Phone System Integration (PSI), also referred as SIP phones, enables an organization to leverage the Zoom client to complete a softphone registration to supported premise based PBX system. End users will have the ability to have softphone functionality within a single client while maintaining a comparable interface to Zoom Phone. Use this API to delete a specific SIP phone on a Zoom account.<br><br>
     * **Prerequisites**:
     * * Currently only supported on Cisco and Avaya PBX systems.
     * * User must enable SIP Phone Integration by contacting the [Sales](https://zoom.us/contactsales) team.<br> **Scope:** `sip_phone:read:admin`
     * <br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     */
    deleteSIPPhone(req: operations.DeleteSIPPhoneRequest, security: operations.DeleteSIPPhoneSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteSIPPhoneResponse>;
    /**
     * List SIP phones
     *
     * @remarks
     * Zoom’s Phone System Integration (PSI), also referred as SIP phones, enables an organization to leverage the Zoom client to complete a softphone registration to supported premise based PBX system. End users will have the ability to have softphone functionality within a single client while maintaining a comparable interface to Zoom Phone. Use this API to list SIP phones on an account.<br><br>
     * **Prerequisites**:
     * * Currently only supported on Cisco and Avaya PBX systems.
     * * User must enable SIP Phone Integration by contacting the [Sales](https://zoom.us/contactsales) team.<br> **Scope:** `sip_phone:read:admin`<br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`<br>
     *
     */
    listSipPhones(req: operations.ListSipPhonesRequest, security: operations.ListSipPhonesSecurity, config?: AxiosRequestConfig): Promise<operations.ListSipPhonesResponse>;
    /**
     * Update SIP phone
     *
     * @remarks
     * Zoom’s Phone System Integration (PSI), also referred as SIP phones, enables an organization to leverage the Zoom client to complete a softphone registration to supported premise based PBX system. End users will have the ability to have softphone functionality within a single client while maintaining a comparable interface to Zoom Phone. Use this API to update information of a specific SIP Phone on a Zoom account.<br><br>
     * **Prerequisites**:
     * * Currently only supported on Cisco and Avaya PBX systems.
     * * The account owner or account admin must first enable SIP Phone Integration by contacting the [Sales](https://zoom.us/contactsales) team.<br> **Scope:** `sip_phone:write:admin`
     * <br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     */
    updateSIPPhone(req: operations.UpdateSIPPhoneRequest, security: operations.UpdateSIPPhoneSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateSIPPhoneResponse>;
}
