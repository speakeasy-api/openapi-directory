import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetFileAssociationsSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class GetFileAssociationsRequest extends SpeakeasyBase {
    /**
     * File id for single object
     */
    fileId: string;
    /**
     * Xero identifier for Tenant
     */
    xeroTenantId: string;
}
export declare class GetFileAssociationsResponse extends SpeakeasyBase {
    /**
     * search results matching criteria
     */
    associations?: shared.Association[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
