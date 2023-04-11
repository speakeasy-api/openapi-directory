import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class RoomsDevices {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Change Zoom Rooms' app version
     *
     * @remarks
     * [Upgrade](https://support.zoom.us/hc/en-us/articles/204675449-Upgrade-or-Downgrade-Zoom-Rooms-Software#h_1751c48a-644e-4a60-b96a-31ec77c616e6) or [downgrade](https://support.zoom.us/hc/en-us/articles/204675449-Upgrade-or-Downgrade-Zoom-Rooms-Software#h_d97349d6-9253-484c-af80-350475026524) the version of Zoom Rooms App installed in your Mac or Windows device.
     *
     * **Prerequisites:**<br>
     * * Pro or a higher account with Zoom Rooms.
     * * Zoom Rooms software must be installed either on a Mac or a Windows device. This API does not support other devices.
     */
    changeZoomRoomsAppVersion(req: operations.ChangeZoomRoomsAppVersionRequest, config?: AxiosRequestConfig): Promise<operations.ChangeZoomRoomsAppVersionResponse>;
}
