import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateFolderSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class CreateFolderRequest extends SpeakeasyBase {
    folder?: shared.Folder;
    /**
     * Xero identifier for Tenant
     */
    xeroTenantId: string;
}
export declare class CreateFolderResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * search results matching criteria
     */
    folder?: shared.Folder;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
