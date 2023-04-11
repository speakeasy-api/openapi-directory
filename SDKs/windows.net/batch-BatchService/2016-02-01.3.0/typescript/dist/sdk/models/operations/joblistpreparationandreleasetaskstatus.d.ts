import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class JobListPreparationAndReleaseTaskStatusRequest extends SpeakeasyBase {
    /**
     * An OData $filter clause.
     */
    dollarFilter?: string;
    /**
     * An OData $select clause.
     */
    dollarSelect?: string;
    /**
     * Client API Version.
     */
    apiVersion: string;
    /**
     * The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    clientRequestId?: string;
    /**
     * The id of the job.
     */
    jobId: string;
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
     * The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
     */
    timeout?: number;
}
export declare class JobListPreparationAndReleaseTaskStatusResponse extends SpeakeasyBase {
    /**
     * The error from the Batch service.
     */
    batchError?: shared.BatchError;
    cloudJobListPreparationAndReleaseTaskStatusResult?: shared.CloudJobListPreparationAndReleaseTaskStatusResult;
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
