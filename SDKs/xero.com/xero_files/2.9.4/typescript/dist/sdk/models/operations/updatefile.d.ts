import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateFileSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class UpdateFileRequest extends SpeakeasyBase {
    /**
     * File id for single object
     */
    fileId: string;
    fileObject?: shared.FileObject;
    /**
     * Xero identifier for Tenant
     */
    xeroTenantId: string;
}
export declare class UpdateFileResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A successful request
     */
    fileObject?: shared.FileObject;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
