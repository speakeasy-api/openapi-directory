import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ServicePrincipalsUpdatePasswordCredentialsRequest extends SpeakeasyBase {
    /**
     * Parameters to update the passwordCredentials of an existing service principal.
     */
    passwordCredentialsUpdateParameters: shared.PasswordCredentialsUpdateParameters;
    /**
     * Client API version.
     */
    apiVersion: string;
    /**
     * The object ID of the service principal.
     */
    objectId: string;
    /**
     * The tenant ID.
     */
    tenantID: string;
}
export declare class ServicePrincipalsUpdatePasswordCredentialsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error response describing why the operation failed.
     */
    graphError?: shared.GraphError;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
