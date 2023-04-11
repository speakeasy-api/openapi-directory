import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Stub mapping record and snapshot functions
 *
 * @see {@link http://wiremock.org/docs/record-playback/} - User documentation
 */
export declare class Recordings {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get recording status
     */
    getAdminRecordingsStatus(config?: AxiosRequestConfig): Promise<operations.GetAdminRecordingsStatusResponse>;
    /**
     * Take a snapshot recording
     */
    postAdminRecordingsSnapshot(req: operations.PostAdminRecordingsSnapshotRequestBody, config?: AxiosRequestConfig): Promise<operations.PostAdminRecordingsSnapshotResponse>;
    /**
     * Start recording
     *
     * @remarks
     * Begin recording stub mappings
     */
    postAdminRecordingsStart(req: operations.PostAdminRecordingsStartRequestBody, config?: AxiosRequestConfig): Promise<operations.PostAdminRecordingsStartResponse>;
    /**
     * Stop recording
     *
     * @remarks
     * End recording of stub mappings
     */
    postAdminRecordingsStop(config?: AxiosRequestConfig): Promise<operations.PostAdminRecordingsStopResponse>;
}
