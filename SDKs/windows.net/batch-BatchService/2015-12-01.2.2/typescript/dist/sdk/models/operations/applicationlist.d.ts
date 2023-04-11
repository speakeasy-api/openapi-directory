import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ApplicationListRequest extends SpeakeasyBase {
    /**
     * Client API Version.
     */
    apiVersion: string;
    /**
     * Caller generated request identity, in the form of a GUID with no decoration such as curly braces e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    clientRequestId?: string;
    /**
     * Sets the maximum number of items to return in the response.
     */
    maxresults?: number;
    /**
     * The time the request was issued. If not specified, this header will be automatically populated with the current system clock time.
     */
    ocpDate?: string;
    /**
     * Specifies if the server should return the client-request-id identifier in the response.
     */
    returnClientRequestId?: boolean;
    /**
     * Sets the maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
     */
    timeout?: number;
}
export declare class ApplicationListResponse extends SpeakeasyBase {
    applicationListResult?: shared.ApplicationListResult;
    /**
     * Error from the Batch service
     */
    batchError?: shared.BatchError;
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
