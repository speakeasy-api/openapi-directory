import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class PhoneDevices {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add a device
     *
     * @remarks
     * By default, all Zoom Phone users can make and receive calls using the Zoom desktop and mobile applications. Additionally, if a desk phone is required, use this API to [add a desk phone and assign it](https://support.zoom.us/hc/en-us/articles/360021119092#h_5ca07504-68a8-4c3d-ad0e-c1d3594436da) to a user.
     *
     * **Prerequisites:**<br>
     * * Pro or a higher account with Zoom Phone license
     * * Account owner or admin permissions
     * * [Supported device](https://support.zoom.us/hc/en-us/articles/360001299063-Zoom-Voice-Supported-Devices)<br>
     * **Scopes:** `phone:write:admin`<br>
     *
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     */
    addPhoneDevice(req: operations.AddPhoneDeviceApplicationJSON, security: operations.AddPhoneDeviceSecurity, config?: AxiosRequestConfig): Promise<operations.AddPhoneDeviceResponse>;
    /**
     * Delete a device
     *
     * @remarks
     * Remove a [desk phone device](https://support.zoom.us/hc/en-us/articles/360021119092) from the Zoom Phone System Management.<br><br>
     * **Prerequisites:**<br>
     * * Pro or a higher account with Zoom Phone license
     * * Account owner or admin permissions
     * * Device must not have been assigned to a user.<br>
     * **Scopes:** `phone:write:admin`<br>
     *
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     */
    deleteADevice(req: operations.DeleteADeviceRequest, security: operations.DeleteADeviceSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteADeviceResponse>;
    /**
     * Get device details
     *
     * @remarks
     * Get detailed information about a specific [desk phone device](https://support.zoom.us/hc/en-us/articles/360021119092).<br><br>
     * **Prerequisites:**<br>
     * * Pro or a higher account with Zoom Phone license
     * * Account owner or admin permissions<br>
     * **Scopes:** `phone:write:admin`<br>
     *
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     */
    getADevice(req: operations.GetADeviceRequest, security: operations.GetADeviceSecurity, config?: AxiosRequestConfig): Promise<operations.GetADeviceResponse>;
    /**
     * List devices
     *
     * @remarks
     * List all the [desk phone devices](https://support.zoom.us/hc/en-us/articles/360021119092) that are configured with Zoom Phone on an account. To view devices that have not yet been assigned to a user, set the value of the `type` query parameter as `unassigned` and to view devices that have been assigned, set the value as `assigned`.<br><br>
     * **Scopes:** `phone:read:admin`
     *  <br>
     * **Prerequisites:**<br>
     * * Pro or a higher account with Zoom Phone license
     * * Account owner or admin permissions<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
     */
    listPhoneDevices(req: operations.ListPhoneDevicesRequest, security: operations.ListPhoneDevicesSecurity, config?: AxiosRequestConfig): Promise<operations.ListPhoneDevicesResponse>;
    /**
     * Update a device
     *
     * @remarks
     * Update information of a [desk phone device](https://support.zoom.us/hc/en-us/articles/360021119092).<br><br>
     * **Prerequisites:**<br>
     * * Pro or a higher account with Zoom Phone license
     * * Account owner or admin permissions<br>
     * **Scopes:** `phone:write:admin`<br>
     *
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     */
    updateADevice(req: operations.UpdateADeviceRequest, security: operations.UpdateADeviceSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateADeviceResponse>;
}
