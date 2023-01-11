import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Rooms {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * addARoom - Add a Zoom Room
     *
     * Use this API to [add a Zoom Room](https://support.zoom.us/hc/en-us/articles/202822279-Add-Zoom-Rooms-on-Web-Portal) to a Zoom account.<br><br>
     * **Prerequisites:**<br>
     * * Pro or a higher plan with [Zoom Room](https://zoom.us/zoomrooms) license.<br>
     * **Scopes**: `room:write:admin`<br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
    **/
    addARoom(req: operations.AddARoomRequest, config?: AxiosRequestConfig): Promise<operations.AddARoomResponse>;
    /**
     * changeZrLocation - Change a Zoom Room's location
     *
     * An account owner of a Zoom account can establish a [Zoom Rooms Location Hierarchy](https://support.zoom.us/hc/en-us/articles/115000342983-Zoom-Rooms-Location-Hierarchy) to better organize Zoom Rooms spread accress various location. The location can be structured in a hierarchy with Country being the top-level location, followed by city, campus, building, and floor. Use this API to assign a new location for a Zoom Room. Note that the Zoom Room can be assigned only to the lowest level location available in the hierarchy.
     * **Prerequisite:**<br>
     * * Account owner or admin permission
     * * Zoom Rooms version 4.0 or higher<br>
     * **Scopes:** `room:write:admin`<br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
    **/
    changeZrLocation(req: operations.ChangeZrLocationRequest, config?: AxiosRequestConfig): Promise<operations.ChangeZrLocationResponse>;
    /**
     * checkInRooms - Check-in or check-out of a Zoom Room
     *
     * The Zoom Rooms check-in feature helps maximize your room utilization. Use this API to either **check in** and confirm that you are utilizing the room reservation or to **check out** of the room so that the room gets released from the scheduled meeting and will be made available for others to use. Learn more from the [Using the Zoom Rooms check-in feature](https://support.zoom.us/hc/en-us/articles/360001147163-Using-the-Zoom-Rooms-check-in-feature) guide.
     *
     * **Prerequisites:**
     * * [Zoom Rooms](https://support.zoom.us/hc/en-us/articles/207483343-Getting-started-with-Zoom-Rooms#:~:text=Zoom%20Rooms%20is%20a%20software,or%20from%20their%20mobile%20device) must have been set up for use for the account and must be online.
     * * You must have access to the Calendar Integration APIs (either Microsoft Exchange or Google Calendar APIs) to get calendar information associated with the Room.
     *
     * **Scope:** `room:write:admin`
    **/
    checkInRooms(req: operations.CheckInRoomsRequest, config?: AxiosRequestConfig): Promise<operations.CheckInRoomsResponse>;
    /**
     * deleteAZoomRoom - Delete a Zoom Room
     *
     * [Remove](https://support.zoom.us/hc/en-us/articles/360033432032-Zoom-Room-Device-Profiles#h_e55b2092-c418-4b02-819f-44de51448900) a specific Zoom Room profile from a Zoom account.<br><br>
     * **Prerequisites:**<br>
     * * Pro or a higher plan with [Zoom Room](https://zoom.us/zoomrooms) license.<br>
     * **Scopes**: `room:write:admin`<br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
    **/
    deleteAZoomRoom(req: operations.DeleteAZoomRoomRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAZoomRoomResponse>;
    /**
     * getZrProfile - Get Zoom Room profile
     *
     *
     * Zoom Rooms is a software-based room system that provides an integrated experience for audio conferencing, wireless screen sharing and video conferencing. Use this API to get detailed information on a specific Zoom Room in a Zoom account.
     *
     * **Prerequisites:**<br>
     * * Pro or a higher plan with [Zoom Room](https://zoom.us/zoomrooms) license.<br>
     * **Scopes**: `room:read:admin`<br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
    **/
    getZrProfile(req: operations.GetZrProfileRequest, config?: AxiosRequestConfig): Promise<operations.GetZrProfileResponse>;
    /**
     * getZrSettings - Get Zoom Room settings
     *
     * Get information on meeting or alert settings applied to a specific Zoom Room. By default, only **Meeting Settings** are returned. To view only **Alert Settings**, specify `alert` as the value of the `setting_type` query parameter.<br>
     * **Prerequisites:**<br>
     * * Zoom Room licenses
     * * Owner or Admin privileges on the Zoom Account.<br>
     * **Scopes:** `room:read:admin`
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`<br>
    **/
    getZrSettings(req: operations.GetZrSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetZrSettingsResponse>;
    /**
     * listDigitalSignageContent - List digital signage contents
     *
     * List information about existing [Zoom Rooms digital signage](https://support.zoom.us/hc/en-us/articles/360000030683-Zoom-Rooms-digital-signage) content in a Zoom account.<br> You can also access this information by logging into your Zoom account in the Zoom web portal and visiting the [Digital Signage Content](https://zoom.us/digitalsignage#/) page listed under **Room Management**.
     *
     * **Prerequisites:**
     * * Pro or a higher account with Zoom Rooms.
     * * Existing content files or folder in [Digital Signage Content](https://zoom.us/digitalsignage#/) page.
     *
     *
     *
    **/
    listDigitalSignageContent(req: operations.ListDigitalSignageContentRequest, config?: AxiosRequestConfig): Promise<operations.ListDigitalSignageContentResponse>;
    /**
     * listZrDevices - List Zoom Room devices
     *
     * List information about the devices that are being used for a specific [Zoom Room](https://support.zoom.us/hc/en-us/articles/207483343-Getting-Started-with-Zoom-Rooms) in an account.
     *
     * **Prerequisites:**<br>
     * * Pro or a higher plan with [Zoom Room](https://zoom.us/zoomrooms) license.<br>
     * * Account owner or admin permissions.
     * **Scopes**: `room:read:admin`<br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
    **/
    listZrDevices(req: operations.ListZrDevicesRequest, config?: AxiosRequestConfig): Promise<operations.ListZrDevicesResponse>;
    /**
     * listZoomRooms - List Zoom Rooms
     *
     * Zoom Rooms is a software-based room system that provides an integrated experience for audio conferencing, wireless screen sharing and video conferencing. Use this API to list all the existing [Zoom Rooms](https://support.zoom.us/hc/en-us/articles/207483343-Getting-Started-with-Zoom-Rooms) in a Zoom account.<br><br>
     * **Prerequisites:**<br>
     * * Pro or a higher plan with [Zoom Room](https://zoom.us/zoomrooms) license.<br>
     * **Scopes**: `room:read:admin`<br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
    **/
    listZoomRooms(req: operations.ListZoomRoomsRequest, config?: AxiosRequestConfig): Promise<operations.ListZoomRoomsResponse>;
    /**
     * manageE911signage - Update E911 digital signage
     *
     * Display or hide E911 emergency alert text content from [Zoom Rooms digital signage](https://support.zoom.us/hc/en-us/articles/360000030683-Zoom-Rooms-digital-signage).
     *
     * **Scope:** `room:write:admin`
     *
     * **Prerequisites:**<br>
     * * [Zoom Rooms](https://zoom.us/zoomrooms/software) 5.3.0 or higher
     * * Zoom Rooms digital signage must be [enabled](https://support.zoom.us/hc/en-us/articles/360000030683-Zoom-Rooms-Digital-Signage#h_767fbb33-82a8-45a8-8392-a1bfa9687edd)
     *
    **/
    manageE911signage(req: operations.ManageE911signageRequest, config?: AxiosRequestConfig): Promise<operations.ManageE911signageResponse>;
    /**
     * updateRoomProfile - Update a Zoom Room profile
     *
     * Update basic information on a specific Zoom Room in a Zoom account.<br>
     *
     * **Prerequisites:**<br>
     * * Pro or a higher plan with [Zoom Room](https://zoom.us/zoomrooms) license.<br>
     * **Scopes**: `room:write:admin`<br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
    **/
    updateRoomProfile(req: operations.UpdateRoomProfileRequest, config?: AxiosRequestConfig): Promise<operations.UpdateRoomProfileResponse>;
    /**
     * updateZrSettings - Update Zoom Room settings
     *
     * Update either meeting or alert settings applied to a specific Zoom Room. To update **Alert Settings**, specify `alert` as the value of the `setting_type` query parameter. To update **Meeting Settings**, specify `meeting` as the value of the `setting_type` query parameter.<br>
     * **Prerequisites:**<br>
     * * Zoom Room licenses
     * * Owner or Admin privileges on the Zoom Account.<br>
     * **Scopes:** `room:write:admin`<br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
    **/
    updateZrSettings(req: operations.UpdateZrSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateZrSettingsResponse>;
}
