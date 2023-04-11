import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteFileSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class DeleteFileRequest extends SpeakeasyBase {
    /**
     * File id for single object
     */
    fileId: string;
    /**
     * Xero identifier for Tenant
     */
    xeroTenantId: string;
}
export declare class DeleteFileResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
