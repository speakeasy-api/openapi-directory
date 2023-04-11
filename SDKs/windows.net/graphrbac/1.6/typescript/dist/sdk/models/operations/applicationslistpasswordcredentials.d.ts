import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ApplicationsListPasswordCredentialsRequest extends SpeakeasyBase {
    /**
     * Client API version.
     */
    apiVersion: string;
    /**
     * Application object ID.
     */
    applicationObjectId: string;
    /**
     * The tenant ID.
     */
    tenantID: string;
}
export declare class ApplicationsListPasswordCredentialsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error response describing why the operation failed.
     */
    graphError?: shared.GraphError;
    /**
     * OK. The operation was successful.
     */
    passwordCredentialListResult?: shared.PasswordCredentialListResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
