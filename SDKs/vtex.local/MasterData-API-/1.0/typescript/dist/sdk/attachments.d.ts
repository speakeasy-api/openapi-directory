import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * The `attachments` API allows you to upload and download files.
 *
 * @remarks
 *
 * In case of images, the `content-type` header is filled with` image/jpg`.
 */
export declare class Attachments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieve attachment
     *
     * @remarks
     * Use this API to retrieve a file.
     *
     * Be sure to include the file extension in the name. Like in this example:
     * ```
     * /dataentities/CL/documents/123/file/attachments/image.png
     * ```
     */
    retrieveattachment(req: operations.RetrieveattachmentRequest, config?: AxiosRequestConfig): Promise<operations.RetrieveattachmentResponse>;
    /**
     * Save attachment
     *
     * @remarks
     * This API allows you to save a file in a field of type `File`.
     *
     *
  When using in javascript, you must add the header `content-type` with value `multipart/form-data;`
     *
     *
  You can upload more than one file. Just add a new field in the `form-data` with type `File`.
     */
    saveattachment(req: operations.SaveattachmentRequest, config?: AxiosRequestConfig): Promise<operations.SaveattachmentResponse>;
}
