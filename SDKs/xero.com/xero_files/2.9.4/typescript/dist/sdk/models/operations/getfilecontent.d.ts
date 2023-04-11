import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetFileContentSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class GetFileContentRequest extends SpeakeasyBase {
    /**
     * File id for single object
     */
    fileId: string;
    /**
     * Xero identifier for Tenant
     */
    xeroTenantId: string;
}
export declare class GetFileContentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * returns the byte array of the specific file based on id
     */
    getFileContent200ApplicationOctetStreamBinaryString?: Uint8Array;
}
