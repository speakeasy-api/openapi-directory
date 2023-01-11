import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class VenueApi {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * venueApiDelete - Deletes a venue.
    **/
    venueApiDelete(req: operations.VenueApiDeleteRequest, config?: AxiosRequestConfig): Promise<operations.VenueApiDeleteResponse>;
    /**
     * venueApiGetList - Gets a page of event venue.
    **/
    venueApiGetList(req: operations.VenueApiGetListRequest, config?: AxiosRequestConfig): Promise<operations.VenueApiGetListResponse>;
    /**
     * venueApiPostReport - Creates a new report.
    **/
    venueApiPostReport(req: operations.VenueApiPostReportRequest, config?: AxiosRequestConfig): Promise<operations.VenueApiPostReportResponse>;
}
