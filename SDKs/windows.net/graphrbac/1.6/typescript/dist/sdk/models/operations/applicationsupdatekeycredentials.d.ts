import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ApplicationsUpdateKeyCredentialsRequest extends SpeakeasyBase {
    /**
     * Parameters to update the keyCredentials of an existing application.
     */
    keyCredentialsUpdateParameters: shared.KeyCredentialsUpdateParameters;
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
export declare class ApplicationsUpdateKeyCredentialsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error response describing why the operation failed.
     */
    graphError?: shared.GraphError;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
