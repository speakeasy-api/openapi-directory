import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class JobScheduleGetRequest extends SpeakeasyBase {
    /**
     * An OData $expand clause.
     */
    dollarExpand?: string;
    /**
     * An OData $select clause.
     */
    dollarSelect?: string;
    /**
     * An ETag is specified. Specify this header to perform the operation only if the resource's ETag is an exact match as specified.
     */
    ifMatch?: string;
    /**
     * Specify this header to perform the operation only if the resource has been modified since the specified date/time.
     */
    ifModifiedSince?: string;
    /**
     * An ETag is specified. Specify this header to perform the operation only if the resource's ETag does not match the specified ETag.
     */
    ifNoneMatch?: string;
    /**
     * Specify this header to perform the operation only if the resource has not been modified since the specified date/time.
     */
    ifUnmodifiedSince?: string;
    /**
     * Client API Version.
     */
    apiVersion: string;
    /**
     * The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    clientRequestId?: string;
    /**
     * The id of the job schedule to get.
     */
    jobScheduleId: string;
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
export declare class JobScheduleGetResponse extends SpeakeasyBase {
    /**
     * The error from the Batch service.
     */
    batchError?: shared.BatchError;
    cloudJobSchedule?: shared.CloudJobSchedule;
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
