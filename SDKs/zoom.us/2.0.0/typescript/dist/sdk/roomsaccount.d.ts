import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class RoomsAccount {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get Zoom Room account profile
     *
     * @remarks
     * Get details on the account profile of a Zoom Room. This information can only by accessed either by the Zoom Room Account Owner or a user with Zoom Rooms admin permission. To get information on an individual Room Profile, use [Get Zoom Room Profile API](https://marketplace.zoom.us/docs/api-reference/zoom-api/rooms/getzrprofile) instead.
     *
     * **Prerequisites:**<br>
     * * Zoom account owner or Zoom Rooms admin permissions<br>
     *
     * **Scopes:** `room:read:admin`<br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
     */
    getZRAccountProfile(config?: AxiosRequestConfig): Promise<operations.GetZRAccountProfileResponse>;
    /**
     * Get Zoom Room account settings
     *
     * @remarks
     * Get details on Account Settings of a Zoom Room. With this API, you can view either the **Account Meeting Settings** or the **Alert Settings** (Client Alert Settings and Notfication Settings) of the Zoom Rooms account. By default, only **Account Meeting Settings** are returned. To view only **Alert Settings**, specify `alert` as the value of the `setting_type` query parameter.<br><br>
     * **Prerequisites:**<br>
     * * Zoom Room licenses
     * * Owner or Admin privileges on the Zoom Account.<br>
     * **Scopes:** `room:read:admin`<br><br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
     */
    getZRAccountSettings(req: operations.GetZRAccountSettingsRequest, security: operations.GetZRAccountSettingsSecurity, config?: AxiosRequestConfig): Promise<operations.GetZRAccountSettingsResponse>;
    /**
     * Update Zoom Room account profile
     *
     * @remarks
     * Update information on the account profile of a Zoom Room. This information can only by accessed either by the Zoom Room Account Owner or a user with Zoom Rooms admin permission. To update information on an individual Room Profile, use [Update Zoom Room Profile API](https://marketplace.zoom.us/docs/api-reference/zoom-api/rooms/updatezrprofile) instead.
     *
     * **Prerequisites:**<br>
     * * Zoom account owner or Zoom Rooms admin permissions<br>
     *
     * **Scopes:** `room:write:admin`<br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
     */
    updateZRAccProfile(req: operations.UpdateZRAccProfileApplicationJSON, security: operations.UpdateZRAccProfileSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateZRAccProfileResponse>;
    /**
     * Update Zoom Room account settings
     *
     * @remarks
     * Update account settings applied for Zoom Rooms in a Zoom account. With this API, you can update either the **Account Meeting Settings** or the **Alert Settings** (Client Alert Settings and Notfication Settings) of the Zoom Rooms account by specifying the required setting type in the `setting_type` parameter. To update only **Alert Settings**, specify `alert` as the value of the `setting_type` query parameter and to update only **Account Meeting Settings**, specify `meeting` as the value of the `setting_type` query parameter.<br><br>
     * **Prerequisites:**<br>
     * * Zoom Room licenses
     * * Owner or Admin privileges on the Zoom Account.<br>
     * **Scopes:** `room:write:admin`<br>
     *
     *   **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
     */
    updateZoomRoomAccSettings(req: operations.UpdateZoomRoomAccSettingsRequest, security: operations.UpdateZoomRoomAccSettingsSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateZoomRoomAccSettingsResponse>;
}
