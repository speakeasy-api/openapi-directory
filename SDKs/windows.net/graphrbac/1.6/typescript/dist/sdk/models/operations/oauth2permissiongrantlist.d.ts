import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class OAuth2PermissionGrantListRequest extends SpeakeasyBase {
    /**
     * This is the Service Principal ObjectId associated with the app
     */
    dollarFilter?: string;
    /**
     * Client API version.
     */
    apiVersion: string;
    /**
     * The tenant ID.
     */
    tenantID: string;
}
export declare class OAuth2PermissionGrantListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK. The operation was successful.
     */
    oAuth2PermissionGrantListResult?: shared.OAuth2PermissionGrantListResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
