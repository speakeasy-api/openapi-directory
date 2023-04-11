import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UploadFileSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class UploadFileRequestBody extends SpeakeasyBase {
    body?: string;
    filename?: string;
    mimeType?: string;
    /**
     * exact name of the file you are uploading
     */
    name?: string;
}
export declare class UploadFileRequest extends SpeakeasyBase {
    /**
     * pass an optional folder id to save file to specific folder
     */
    folderId?: string;
    requestBody?: UploadFileRequestBody;
    /**
     * Xero identifier for Tenant
     */
    xeroTenantId: string;
}
export declare class UploadFileResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A successful request
     */
    fileObject?: shared.FileObject;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
