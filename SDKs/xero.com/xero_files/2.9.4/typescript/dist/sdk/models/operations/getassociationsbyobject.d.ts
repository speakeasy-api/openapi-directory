import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAssociationsByObjectSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class GetAssociationsByObjectRequest extends SpeakeasyBase {
    /**
     * Object id for single object
     */
    objectId: string;
    /**
     * Xero identifier for Tenant
     */
    xeroTenantId: string;
}
export declare class GetAssociationsByObjectResponse extends SpeakeasyBase {
    /**
     * search results matching criteria
     */
    associations?: shared.Association[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
