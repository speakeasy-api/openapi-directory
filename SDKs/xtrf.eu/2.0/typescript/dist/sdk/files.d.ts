import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * To change the description use /examples/TagsDescriptions.json
 */
export declare class Files {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Uploads a temporary file (ie. for XML import). Returns token which can be used in other API calls.
     *
     * @remarks
     * When a file is required by an operation (ie. task creation) it must be uploaded previously to the API.
     * Uploading a file will result in a file token, which can be used to reference this file in other API calls.
     *  Each file must be uploaded separately.
     *  Keep in mind that file token has limited validity (ie. 10 minutes).
     *  Therefore files must be uploaded just before issuing API call which reference them.
     *
     */
    uploadFile(req: shared.FileToUploadDto, config?: AxiosRequestConfig): Promise<operations.UploadFileResponse>;
}
