import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class OAuth2PermissionGrantDeleteRequest extends SpeakeasyBase {
    /**
     * Client API version.
     */
    apiVersion: string;
    /**
     * The object ID of a permission grant.
     */
    objectId: string;
    /**
     * The tenant ID.
     */
    tenantID: string;
}
export declare class OAuth2PermissionGrantDeleteResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error response describing why the operation failed.
     */
    graphError?: shared.GraphError;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
