import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FileGetFromTaskRequest extends SpeakeasyBase {
    /**
     * Specify this header to perform the operation only if the resource has been modified since the specified date/time.
     */
    ifModifiedSince?: string;
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
     * The path to the task file that you want to get the content of.
     */
    fileName: string;
    /**
     * The id of the job that contains the task.
     */
    jobId: string;
    /**
     * The time the request was issued. If not specified, this header will be automatically populated with the current system clock time.
     */
    ocpDate?: string;
    /**
     * The byte range to be retrieved. The default is to retrieve the entire file. The format is startRange-endRange.
     */
    ocpRange?: string;
    /**
     * Whether the server should return the client-request-id identifier in the response.
     */
    returnClientRequestId?: boolean;
    /**
     * The id of the task whose file you want to retrieve.
     */
    taskId: string;
    /**
     * The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
     */
    timeout?: number;
}
export declare class FileGetFromTaskResponse extends SpeakeasyBase {
    /**
     * The error from the Batch service.
     */
    batchError?: shared.BatchError;
    contentType: string;
    fileGetFromTask200ApplicationJSONBinaryString?: Uint8Array;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
