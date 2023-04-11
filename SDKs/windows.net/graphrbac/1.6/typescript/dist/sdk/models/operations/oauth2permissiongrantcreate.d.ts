import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class OAuth2PermissionGrantCreateRequest extends SpeakeasyBase {
    /**
     * The relevant app Service Principal Object Id and the Service Principal Object Id you want to grant.
     */
    oAuth2PermissionGrant?: shared.OAuth2PermissionGrant;
    /**
     * Client API version.
     */
    apiVersion: string;
    /**
     * The tenant ID.
     */
    tenantID: string;
}
export declare class OAuth2PermissionGrantCreateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK. The operation was successful.
     */
    oAuth2PermissionGrant?: shared.OAuth2PermissionGrant;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
