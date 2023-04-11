import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PoolEvaluateAutoScaleRequest extends SpeakeasyBase {
    /**
     * The parameters for the request.
     */
    poolEvaluateAutoScaleParameter: shared.PoolEvaluateAutoScaleParameter;
    /**
     * Client API Version.
     */
    apiVersion: string;
    /**
     * Caller generated request identity, in the form of a GUID with no decoration such as curly braces e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    clientRequestId?: string;
    /**
     * The time the request was issued. If not specified, this header will be automatically populated with the current system clock time.
     */
    ocpDate?: string;
    /**
     * The id of the pool on which to evaluate the automatic scaling formula.
     */
    poolId: string;
    /**
     * Specifies if the server should return the client-request-id identifier in the response.
     */
    returnClientRequestId?: boolean;
    /**
     * Sets the maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
     */
    timeout?: number;
}
export declare class PoolEvaluateAutoScaleResponse extends SpeakeasyBase {
    autoScaleRun?: shared.AutoScaleRun;
    /**
     * Error from the Batch service
     */
    batchError?: shared.BatchError;
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
