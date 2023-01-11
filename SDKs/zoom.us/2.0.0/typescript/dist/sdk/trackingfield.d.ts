import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TrackingField {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * trackingfieldCreate - Create a tracking field
     *
     * [Tracking fields](https://support.zoom.us/hc/en-us/articles/115000293426-Scheduling-Tracking-Fields) allow you to analyze usage by various fields within an organization.<br> Use this API to create a new tracking field.<br><br>
     * **Scope:** `trackingfield:write:admin`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
     * **Prerequisites:**
     * * Business, Education, API or higher plan
    **/
    trackingfieldCreate(req: operations.TrackingfieldCreateRequest, config?: AxiosRequestConfig): Promise<operations.TrackingfieldCreateResponse>;
    /**
     * trackingfieldDelete - Delete a tracking field
     *
     * [Tracking fields](https://support.zoom.us/hc/en-us/articles/115000293426-Scheduling-Tracking-Fields) allow you to analyze usage by various fields within an organization.<br> Use this API to delete a tracking field.<br><br>
     * **Scope:** `trackingfield:write:admin`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
     * **Prerequisites:**
     * * Business, Education, API or higher plan
    **/
    trackingfieldDelete(req: operations.TrackingfieldDeleteRequest, config?: AxiosRequestConfig): Promise<operations.TrackingfieldDeleteResponse>;
    /**
     * trackingfieldGet - Get a tracking field
     *
     * [Tracking fields](https://support.zoom.us/hc/en-us/articles/115000293426-Scheduling-Tracking-Fields) allow you to analyze usage by various fields within an organization.<br><br> When scheduling a meeting, the tracking field will be included in the meeting options.<br>Use this API to get information on a tracking field.<br><br>
     * **Scopes:** `trackingfield:read:admin`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
     * **Prerequisites:**
     * * Business, Education, API or higher plan
     *
    **/
    trackingfieldGet(req: operations.TrackingfieldGetRequest, config?: AxiosRequestConfig): Promise<operations.TrackingfieldGetResponse>;
    /**
     * trackingfieldList - List tracking fields
     *
     * [Tracking fields](https://support.zoom.us/hc/en-us/articles/115000293426-Scheduling-Tracking-Fields) allow you to analyze usage by various fields within an organization.<br> Use this API to list all the tracking fields on your Zoom account.<br><br>
     * **Scopes:** `trackingfield:read:admin`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`<br>
     * **Prerequisites:**
     * * Business, Education, API or higher plan
    **/
    trackingfieldList(req: operations.TrackingfieldListRequest, config?: AxiosRequestConfig): Promise<operations.TrackingfieldListResponse>;
    /**
     * trackingfieldUpdate - Update a tracking field
     *
     * [Tracking fields](https://support.zoom.us/hc/en-us/articles/115000293426-Scheduling-Tracking-Fields) allow you to analyze usage by various fields within an organization.<br> Use this API to update a tracking field.<br><br>
     * **Scope:** `trackingfield:write:admin`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
     * **Prerequisites:**
     * * Business, Education, API or higher plan
    **/
    trackingfieldUpdate(req: operations.TrackingfieldUpdateRequest, config?: AxiosRequestConfig): Promise<operations.TrackingfieldUpdateResponse>;
}
