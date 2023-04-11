import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateFolderSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class UpdateFolderRequest extends SpeakeasyBase {
    folder: shared.Folder;
    /**
     * Folder id for single object
     */
    folderId: string;
    /**
     * Xero identifier for Tenant
     */
    xeroTenantId: string;
}
export declare class UpdateFolderResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * return the updated object
     */
    folder?: shared.Folder;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
