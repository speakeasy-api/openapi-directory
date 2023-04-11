import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ApplicationsListKeyCredentialsRequest extends SpeakeasyBase {
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
export declare class ApplicationsListKeyCredentialsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error response describing why the operation failed.
     */
    graphError?: shared.GraphError;
    /**
     * OK. The operation was successful.
     */
    keyCredentialListResult?: shared.KeyCredentialListResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
