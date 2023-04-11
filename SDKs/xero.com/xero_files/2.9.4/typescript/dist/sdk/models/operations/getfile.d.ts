import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetFileSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class GetFileRequest extends SpeakeasyBase {
    /**
     * File id for single object
     */
    fileId: string;
    /**
     * Xero identifier for Tenant
     */
    xeroTenantId: string;
}
export declare class GetFileResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * search results matching criteria
     */
    fileObject?: shared.FileObject;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
