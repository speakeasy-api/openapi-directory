import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ApplicationsGetServicePrincipalsIdByAppIdRequest extends SpeakeasyBase {
    /**
     * Client API version.
     */
    apiVersion: string;
    /**
     * The application ID.
     */
    applicationID: string;
    /**
     * The tenant ID.
     */
    tenantID: string;
}
export declare class ApplicationsGetServicePrincipalsIdByAppIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error response describing why the operation failed.
     */
    graphError?: shared.GraphError;
    /**
     * OK. The operation was successful.
     */
    servicePrincipalObjectResult?: shared.ServicePrincipalObjectResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
