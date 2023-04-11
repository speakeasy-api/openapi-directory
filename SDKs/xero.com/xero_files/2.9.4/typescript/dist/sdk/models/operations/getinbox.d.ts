import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetInboxSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class GetInboxRequest extends SpeakeasyBase {
    /**
     * Xero identifier for Tenant
     */
    xeroTenantId: string;
}
export declare class GetInboxResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * search results matching criteria
     */
    folder?: shared.Folder;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
