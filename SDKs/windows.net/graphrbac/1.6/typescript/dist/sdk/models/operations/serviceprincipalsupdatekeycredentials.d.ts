import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ServicePrincipalsUpdateKeyCredentialsRequest extends SpeakeasyBase {
    /**
     * Parameters to update the keyCredentials of an existing service principal.
     */
    keyCredentialsUpdateParameters: shared.KeyCredentialsUpdateParameters;
    /**
     * Client API version.
     */
    apiVersion: string;
    /**
     * The object ID for which to get service principal information.
     */
    objectId: string;
    /**
     * The tenant ID.
     */
    tenantID: string;
}
export declare class ServicePrincipalsUpdateKeyCredentialsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error response describing why the operation failed.
     */
    graphError?: shared.GraphError;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
