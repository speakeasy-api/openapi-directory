import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ServicePrincipalsListRequest extends SpeakeasyBase {
    /**
     * The filter to apply to the operation.
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
export declare class ServicePrincipalsListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error response describing why the operation failed.
     */
    graphError?: shared.GraphError;
    /**
     * OK. The operation was successful.
     */
    servicePrincipalListResult?: shared.ServicePrincipalListResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
