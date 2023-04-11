import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ServicePrincipalsUpdateRequest extends SpeakeasyBase {
    /**
     * Parameters to update a service principal.
     */
    servicePrincipalUpdateParameters: shared.ServicePrincipalUpdateParameters;
    /**
     * Client API version.
     */
    apiVersion: string;
    /**
     * The object ID of the service principal to delete.
     */
    objectId: string;
    /**
     * The tenant ID.
     */
    tenantID: string;
}
export declare class ServicePrincipalsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error response describing why the operation failed.
     */
    graphError?: shared.GraphError;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
