import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteFolderSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class DeleteFolderRequest extends SpeakeasyBase {
    /**
     * Folder id for single object
     */
    folderId: string;
    /**
     * Xero identifier for Tenant
     */
    xeroTenantId: string;
}
export declare class DeleteFolderResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
