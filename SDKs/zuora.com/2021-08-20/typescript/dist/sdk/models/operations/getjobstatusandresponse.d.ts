import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GETJobStatusAndResponseRequest extends SpeakeasyBase {
    /**
     * A custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.
     *
     * @remarks
     *
     * The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (`:`), semicolon (`;`), double quote (`"`), and quote (`'`).
     *
     */
    zuoraTrackId?: string;
    /**
     * UUID of the asynchronous job created by an asynchronous API operation.
     */
    jobId: string;
}
/**
 * Type of job status.
 */
export declare enum GETJobStatusAndResponse200ApplicationJSONStatusEnum {
    Processing = "Processing",
    Failed = "Failed",
    Completed = "Completed"
}
/**
 * OK
 */
export declare class GETJobStatusAndResponse200ApplicationJSON extends SpeakeasyBase {
    /**
     * Error messages returned if the job failed.
     */
    errors?: string;
    /**
     * **Note:** The schema of the `result` nested field is the same as the response body schema of either the ["Create an order"](https://www.zuora.com/developer/api-reference/#operation/POST_Order) or the ["Preview an order"](https://www.zuora.com/developer/api-reference/#operation/POST_PreviewOrder) operation, depending on the purpose of the job.
     *
     * @remarks
     *
     * The following schema for the nested `result` field is defined as the response body schema of "Create an order". See [Preview an Order](https://www.zuora.com/developer/api-reference/#operation/POST_PreviewOrder) for the response body schema of "Preview an order".
     *
     */
    result?: shared.JobResult;
    /**
     * Type of job status.
     */
    status?: GETJobStatusAndResponse200ApplicationJSONStatusEnum;
    /**
     * Indicates whether the operation call succeeded.
     */
    success?: boolean;
}
export declare class GETJobStatusAndResponseResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    getJobStatusAndResponse200ApplicationJSONObject?: GETJobStatusAndResponse200ApplicationJSON;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
