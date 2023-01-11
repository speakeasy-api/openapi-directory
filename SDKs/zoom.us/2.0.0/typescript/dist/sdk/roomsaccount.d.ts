import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class RoomsAccount {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getZrAccountProfile - Get Zoom Room account profile
     *
     * Get details on the account profile of a Zoom Room. This information can only by accessed either by the Zoom Room Account Owner or a user with Zoom Rooms admin permission. To get information on an individual Room Profile, use [Get Zoom Room Profile API](https://marketplace.zoom.us/docs/api-reference/zoom-api/rooms/getzrprofile) instead.
     *
     * **Prerequisites:**<br>
     * * Zoom account owner or Zoom Rooms admin permissions<br>
     *
     * **Scopes:** `room:read:admin`<br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
    **/
    getZrAccountProfile(req: operations.GetZrAccountProfileRequest, config?: AxiosRequestConfig): Promise<operations.GetZrAccountProfileResponse>;
    /**
     * getZrAccountSettings - Get Zoom Room account settings
     *
     * Get details on Account Settings of a Zoom Room. With this API, you can view either the **Account Meeting Settings** or the **Alert Settings** (Client Alert Settings and Notfication Settings) of the Zoom Rooms account. By default, only **Account Meeting Settings** are returned. To view only **Alert Settings**, specify `alert` as the value of the `setting_type` query parameter.<br><br>
     * **Prerequisites:**<br>
     * * Zoom Room licenses
     * * Owner or Admin privileges on the Zoom Account.<br>
     * **Scopes:** `room:read:admin`<br><br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
    **/
    getZrAccountSettings(req: operations.GetZrAccountSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetZrAccountSettingsResponse>;
    /**
     * updateZrAccProfile - Update Zoom Room account profile
     *
     * Update information on the account profile of a Zoom Room. This information can only by accessed either by the Zoom Room Account Owner or a user with Zoom Rooms admin permission. To update information on an individual Room Profile, use [Update Zoom Room Profile API](https://marketplace.zoom.us/docs/api-reference/zoom-api/rooms/updatezrprofile) instead.
     *
     * **Prerequisites:**<br>
     * * Zoom account owner or Zoom Rooms admin permissions<br>
     *
     * **Scopes:** `room:write:admin`<br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
    **/
    updateZrAccProfile(req: operations.UpdateZrAccProfileRequest, config?: AxiosRequestConfig): Promise<operations.UpdateZrAccProfileResponse>;
    /**
     * updateZoomRoomAccSettings - Update Zoom Room account settings
     *
     * Update account settings applied for Zoom Rooms in a Zoom account. With this API, you can update either the **Account Meeting Settings** or the **Alert Settings** (Client Alert Settings and Notfication Settings) of the Zoom Rooms account by specifying the required setting type in the `setting_type` parameter. To update only **Alert Settings**, specify `alert` as the value of the `setting_type` query parameter and to update only **Account Meeting Settings**, specify `meeting` as the value of the `setting_type` query parameter.<br><br>
     * **Prerequisites:**<br>
     * * Zoom Room licenses
     * * Owner or Admin privileges on the Zoom Account.<br>
     * **Scopes:** `room:write:admin`<br>
     *
     *   **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
    **/
    updateZoomRoomAccSettings(req: operations.UpdateZoomRoomAccSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateZoomRoomAccSettingsResponse>;
}
