import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class DeprecatedApiEndpoints {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * listPastMeetingFiles - List past meeting's files
     *
     * **Note: This API has been deprecated and is no longer supported due to GCM encryption updates for security purposes.** To learn about saving the in-meeting chat files via Zoom Client, refer to the [Saving in-meeting chat](https://support.zoom.us/hc/en-us/articles/115004792763-Saving-in-meeting-chat) guide.
     *
     * List files sent via in-meeting chat during a meeting. The in-meeting files are deleted after 24 hours of the meeting completion time.
     * <br><br>
     * **Scope:** `meeting:read`, `meeting:read:admin`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
    **/
    listPastMeetingFiles(req: operations.ListPastMeetingFilesRequest, config?: AxiosRequestConfig): Promise<operations.ListPastMeetingFilesResponse>;
    /**
     * listPastWebinarFiles - List past webinar files
     *
     * **Note: This API has been deprecated and is no longer supported due to GCM encryption updates for security purposes.**
     *
     * List files sent via in-meeting chat during a meeting. The in-meeting files are deleted after 24 hours of the meeting completion time.
     * <br><br>
     * **Scope:** `webinar:read`, `webinar:read:admin`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`<br>
     *
     *
    **/
    listPastWebinarFiles(req: operations.ListPastWebinarFilesRequest, config?: AxiosRequestConfig): Promise<operations.ListPastWebinarFilesResponse>;
}
