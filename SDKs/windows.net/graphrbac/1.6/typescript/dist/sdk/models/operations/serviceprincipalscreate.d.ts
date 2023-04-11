import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ServicePrincipalsCreateRequest extends SpeakeasyBase {
    /**
     * Parameters to create a service principal.
     */
    servicePrincipalCreateParameters: shared.ServicePrincipalCreateParameters;
    /**
     * Client API version.
     */
    apiVersion: string;
    /**
     * The tenant ID.
     */
    tenantID: string;
}
export declare class ServicePrincipalsCreateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error response describing why the operation failed.
     */
    graphError?: shared.GraphError;
    /**
     * The service principal was created successfully.
     */
    servicePrincipal?: Record<string, Record<string, any>>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
