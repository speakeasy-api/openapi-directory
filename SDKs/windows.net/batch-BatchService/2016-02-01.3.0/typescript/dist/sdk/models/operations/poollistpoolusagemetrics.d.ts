import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PoolListPoolUsageMetricsRequest extends SpeakeasyBase {
    /**
     * An OData $filter clause.
     */
    dollarFilter?: string;
    /**
     * Client API Version.
     */
    apiVersion: string;
    /**
     * The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    clientRequestId?: string;
    /**
     * The latest time from which to include metrics. This must be at least two hours before the current time.
     */
    endtime?: Date;
    /**
     * The maximum number of items to return in the response.
     */
    maxresults?: number;
    /**
     * The time the request was issued. If not specified, this header will be automatically populated with the current system clock time.
     */
    ocpDate?: string;
    /**
     * Whether the server should return the client-request-id identifier in the response.
     */
    returnClientRequestId?: boolean;
    /**
     * The earliest time from which to include metrics. This must be at least two and a half hours before the current time.
     */
    starttime?: Date;
    /**
     * The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
     */
    timeout?: number;
}
export declare class PoolListPoolUsageMetricsResponse extends SpeakeasyBase {
    /**
     * The error from the Batch service.
     */
    batchError?: shared.BatchError;
    contentType: string;
    headers?: Record<string, string[]>;
    poolListPoolUsageMetricsResult?: shared.PoolListPoolUsageMetricsResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
