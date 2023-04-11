import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ApplicationsPatchRequest extends SpeakeasyBase {
    /**
     * Parameters to update an existing application.
     */
    applicationUpdateParameters: shared.ApplicationUpdateParameters;
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
export declare class ApplicationsPatchResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error response describing why the operation failed.
     */
    graphError?: shared.GraphError;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
