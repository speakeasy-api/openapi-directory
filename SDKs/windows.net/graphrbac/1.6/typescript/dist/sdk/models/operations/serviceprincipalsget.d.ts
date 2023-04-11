import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ServicePrincipalsGetRequest extends SpeakeasyBase {
    /**
     * Client API version.
     */
    apiVersion: string;
    /**
     * The object ID of the service principal to get.
     */
    objectId: string;
    /**
     * The tenant ID.
     */
    tenantID: string;
}
export declare class ServicePrincipalsGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error response describing why the operation failed.
     */
    graphError?: shared.GraphError;
    /**
     * OK. The operation was successful.
     */
    servicePrincipal?: Record<string, Record<string, any>>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
