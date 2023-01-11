import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ReleaseEventApi {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * releaseEventApiDelete - Deletes an event.
    **/
    releaseEventApiDelete(req: operations.ReleaseEventApiDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ReleaseEventApiDeleteResponse>;
    /**
     * releaseEventApiGetAlbums - Gets a list of albums for a specific event.
    **/
    releaseEventApiGetAlbums(req: operations.ReleaseEventApiGetAlbumsRequest, config?: AxiosRequestConfig): Promise<operations.ReleaseEventApiGetAlbumsResponse>;
    /**
     * releaseEventApiGetList - Gets a page of events.
    **/
    releaseEventApiGetList(req: operations.ReleaseEventApiGetListRequest, config?: AxiosRequestConfig): Promise<operations.ReleaseEventApiGetListResponse>;
    /**
     * releaseEventApiGetNames - Find event names by a part of name.
     *
     *             Matching is done anywhere from the name.
    **/
    releaseEventApiGetNames(req: operations.ReleaseEventApiGetNamesRequest, config?: AxiosRequestConfig): Promise<operations.ReleaseEventApiGetNamesResponse>;
    releaseEventApiGetOne(req: operations.ReleaseEventApiGetOneRequest, config?: AxiosRequestConfig): Promise<operations.ReleaseEventApiGetOneResponse>;
    /**
     * releaseEventApiGetPublishedSongs - Gets a list of songs for a specific event.
    **/
    releaseEventApiGetPublishedSongs(req: operations.ReleaseEventApiGetPublishedSongsRequest, config?: AxiosRequestConfig): Promise<operations.ReleaseEventApiGetPublishedSongsResponse>;
    /**
     * releaseEventApiPostReport - Creates a new report.
    **/
    releaseEventApiPostReport(req: operations.ReleaseEventApiPostReportRequest, config?: AxiosRequestConfig): Promise<operations.ReleaseEventApiPostReportResponse>;
}
