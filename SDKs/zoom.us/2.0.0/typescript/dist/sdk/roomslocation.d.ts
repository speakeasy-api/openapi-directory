import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class RoomsLocation {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add a location
     *
     * @remarks
     * Add a location to the [location hierarchial structure(s)](https://support.zoom.us/hc/en-us/articles/115000342983-Zoom-Rooms-Location-Hierarchy) of Zoom Rooms in an account.
     *
     * **Prerequisites:**
     * * Account owner or admin permissions.
     * * Zoom Rooms Version 4.0 or higher<br><br>
     * **Scopes:** `room:write:admin`<br>
     *
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     */
    addAZRLocation(req: operations.AddAZRLocationApplicationJSON, security: operations.AddAZRLocationSecurity, config?: AxiosRequestConfig): Promise<operations.AddAZRLocationResponse>;
    /**
     * Change the assigned parent location
     *
     * @remarks
     * An account owner of a Zoom account can establish a [Zoom Rooms Location Hierarchy](https://support.zoom.us/hc/en-us/articles/115000342983-Zoom-Rooms-Location-Hierarchy) to better organize Zoom Rooms spread accross various location. The location can be structured in a hierarchy with Country being the top-level location, followed by city, campus, building, and floor. The location in the lower level in the hierarchy is considered as a child of the location that is a level above in the hierarchy. Use this API to change the parent location of a child location. <br><br> For instance, if the location hierarchy is structured in a way where there are two campuses (Campus 1, and Campus 2) in a City and Campus 1 consists of a building named Building 1 with a floor where Zoom Rooms are located, and you would like to rearrange the structure so that Building 1 along with its child locations (floor and Zoom Rooms) are relocated directly under Campus 2 instead of Campus 1, you must provide the location ID of Building 1 in the path parameter of this request and the location ID of Campus 2 as the value of `parent_location_id` in the  request body.<br><br>
     * **Prerequisite:**<br>
     * * Account owner or admin permission
     * * Zoom Rooms version 4.0 or higher<br>
     * **Scopes:** `room:write:admin`<br><br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
     */
    changeParentLocation(req: operations.ChangeParentLocationRequest, security: operations.ChangeParentLocationSecurity, config?: AxiosRequestConfig): Promise<operations.ChangeParentLocationResponse>;
    /**
     * Get Zoom Room location profile
     *
     * @remarks
     * Each location type of the [Zoom Rooms location hierarchy](https://support.zoom.us/hc/en-us/articles/115000342983-Zoom-Rooms-Location-Hierarchy) has a profile page that includes information such as name of the location, address, support email, etc. Use this API to retrieve information about a specific Zoom Rooms location type such as information about the city where the Zoom Rooms is located.
     *
     * **Prerequisite:**<br>
     * * Account owner or admin permission
     * * Zoom Rooms version 4.0 or higher<br>
     * **Scopes:** `room:read:admin`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
     */
    getZRLocationProfile(req: operations.GetZRLocationProfileRequest, security: operations.GetZRLocationProfileSecurity, config?: AxiosRequestConfig): Promise<operations.GetZRLocationProfileResponse>;
    /**
     * Get location settings
     *
     * @remarks
     * Get information on meeting or alert settings applied to Zoom Rooms located in a specific location. By default, only **Meeting Settings** are returned. To view only **Alert Settings**, specify `alert` as the value of the `setting_type` query parameter.<br><br>
     * **Prerequisites:**<br>
     * * Zoom Room licenses
     * * Owner or Admin privileges on the Zoom Account.<br>
     * **Scopes:** `room:read:admin`<br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
     */
    getZRLocationSettings(req: operations.GetZRLocationSettingsRequest, security: operations.GetZRLocationSettingsSecurity, config?: AxiosRequestConfig): Promise<operations.GetZRLocationSettingsResponse>;
    /**
     * Get Zoom Room location structure
     *
     * @remarks
     * Get the [location hierarchial structure(s)](https://support.zoom.us/hc/en-us/articles/115000342983-Zoom-Rooms-Location-Hierarchy) applied on the Zoom Rooms in an account.<br><br>
     * **Prerequisites:**<br>
     * * Zoom Rooms version 4.0 or higher
     * * Account owner or admin permissions<br>
     * **Scopes:** `room:read:admin`<br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     */
    getZRLocationStructure(config?: AxiosRequestConfig): Promise<operations.GetZRLocationStructureResponse>;
    /**
     * List Zoom Room locations
     *
     * @remarks
     * A Zoom account owner or a Zoom Room administrator can establish a [location hierarchy](https://support.zoom.us/hc/en-us/articles/115000342983-Zoom-Rooms-Location-Hierarchy) to help manage Zoom Rooms that are spread among a variety of locations. Use this API to list the different location types used for Zoom Rooms in an account.<br><br>
     * **Prerequisites:**
     * * Account owner or admin permissions.
     * * Zoom Rooms Version 4.0 or higher<br><br>
     * **Scopes:** `room:read:admin`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
     */
    listZRLocations(req: operations.ListZRLocationsRequest, security: operations.ListZRLocationsSecurity, config?: AxiosRequestConfig): Promise<operations.ListZRLocationsResponse>;
    /**
     * Update Zoom Room location profile
     *
     * @remarks
     * Each location type of the [Zoom Rooms location hierarchy](https://support.zoom.us/hc/en-us/articles/115000342983-Zoom-Rooms-Location-Hierarchy) has a profile page that includes information such as name of the location, address, support email, etc. Use this API to update information about a specific Zoom Rooms location type such as information about the city where the Zoom Rooms is located.
     *
     * **Prerequisite:**<br>
     * * Account owner or admin permission
     * * Zoom Rooms version 4.0 or higher<br>
     * **Scopes:** `room:write:admin`<br>
     *
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
     */
    updateZRLocationProfile(req: operations.UpdateZRLocationProfileRequest, security: operations.UpdateZRLocationProfileSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateZRLocationProfileResponse>;
    /**
     * Update location settings
     *
     * @remarks
     * Update information on either meeting or alert settings applied to Zoom Rooms located in a specific location. To update **Alert Settings**, specify `alert` as the value of the `setting_type` query parameter. Similarly, to update **Meeting Settings**, specify `meeting` as the value of the `setting_type` query parameter.<br><br>
     * **Prerequisites:**<br>
     * * Zoom Room licenses
     * * Owner or Admin privileges on the Zoom Account.<br>
     * **Scopes:** `room:write:admin`<br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
     */
    updateZRLocationSettings(req: operations.UpdateZRLocationSettingsRequest, security: operations.UpdateZRLocationSettingsSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateZRLocationSettingsResponse>;
    /**
     * Update Zoom Rooms location structure
     *
     * @remarks
     * Update the [location hierarchial structure(s)](https://support.zoom.us/hc/en-us/articles/115000342983-Zoom-Rooms-Location-Hierarchy) applied on the Zoom Rooms in an account.<br><br>
     * **Prerequisites:**<br>
     * * Zoom Rooms version 4.0 or higher
     * * Account owner or admin permissions<br>
     * **Scopes:** `room:write:admin`<br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
     */
    updateZoomRoomsLocationStructure(req: operations.UpdateZoomRoomsLocationStructureApplicationJSON, security: operations.UpdateZoomRoomsLocationStructureSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateZoomRoomsLocationStructureResponse>;
}
