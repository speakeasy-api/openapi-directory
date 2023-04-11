import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Segment {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get Segment
     *
     * @remarks
     * You can add certain public fields in the query string and the system will attempt to fulfill it. Values such as `cultureInfo` and `utm` are overwriteable, just keep in mind such changes will not be reflected in the client's session.
     *
     *
  If you wish to change the value on the session (and thus be reflected on the segment without special query strings), then use the PATCH request to session.
     */
    getSegment(config?: AxiosRequestConfig): Promise<operations.GetSegmentResponse>;
}
