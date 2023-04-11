import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetFolderSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class GetFolderRequest extends SpeakeasyBase {
    /**
     * Folder id for single object
     */
    folderId: string;
    /**
     * Xero identifier for Tenant
     */
    xeroTenantId: string;
}
export declare class GetFolderResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * search results matching criteria
     */
    folder?: shared.Folder;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
