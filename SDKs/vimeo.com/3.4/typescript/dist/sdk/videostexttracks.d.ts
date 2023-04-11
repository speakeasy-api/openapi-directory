import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class VideosTextTracks {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add a text track to a video
     *
     * @remarks
     * For additional information, see our [text track upload guide](https://developer.vimeo.com/api/upload/texttracks).
     */
    createTextTrack(req: operations.CreateTextTrackRequest, security: operations.CreateTextTrackSecurity, config?: AxiosRequestConfig): Promise<operations.CreateTextTrackResponse>;
    /**
     * Add a text track to a video
     *
     * @remarks
     * For additional information, see our [text track upload guide](https://developer.vimeo.com/api/upload/texttracks).
     */
    createTextTrackAlt1(req: operations.CreateTextTrackAlt1Request, security: operations.CreateTextTrackAlt1Security, config?: AxiosRequestConfig): Promise<operations.CreateTextTrackAlt1Response>;
    /**
     * Delete a text track
     */
    deleteTextTrack(req: operations.DeleteTextTrackRequest, security: operations.DeleteTextTrackSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteTextTrackResponse>;
    /**
     * Edit a text track
     */
    editTextTrack(req: operations.EditTextTrackRequest, security: operations.EditTextTrackSecurity, config?: AxiosRequestConfig): Promise<operations.EditTextTrackResponse>;
    /**
     * Get a specific text track
     */
    getTextTrack(req: operations.GetTextTrackRequest, config?: AxiosRequestConfig): Promise<operations.GetTextTrackResponse>;
    /**
     * Get all the text tracks of a video
     */
    getTextTracks(req: operations.GetTextTracksRequest, config?: AxiosRequestConfig): Promise<operations.GetTextTracksResponse>;
    /**
     * Get all the text tracks of a video
     */
    getTextTracksAlt1(req: operations.GetTextTracksAlt1Request, config?: AxiosRequestConfig): Promise<operations.GetTextTracksAlt1Response>;
}
