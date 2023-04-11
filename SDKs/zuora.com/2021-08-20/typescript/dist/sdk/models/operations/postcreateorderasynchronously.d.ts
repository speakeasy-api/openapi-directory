import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class POSTCreateOrderAsynchronouslyRequest extends SpeakeasyBase {
    postOrderRequestType: shared.POSTOrderRequestType;
    /**
     * An entity ID. If you have [Zuora Multi-entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity) enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you do not need to set this header.
     *
     * @remarks
     *
     */
    zuoraEntityIds?: string;
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
     * Specify whether to return IDs for the [Get job status and response](https://www.zuora.com/developer/api-reference/#operation/GET_JobStatusAndResponse) operation. If you set this query parameter to `true`, the corresponding IDs, which are associated with the numbers returned in this operation, can be returned in the "Get job status and response" response body.
     *
     * @remarks
     *
     */
    returnIds?: boolean;
    /**
     *
     * @remarks
     * The minor version of the Zuora REST API.
     *
     * You need to set this parameter if you want to use the following fields:
     * * subscriptions
     * * subscriptionNumbers
     * * subscriptionIds (when the `returnId` query parameter is set to `true`)
     *
     */
    zuoraVersion?: string;
}
/**
 * Accepted
 */
export declare class POSTCreateOrderAsynchronously202ApplicationJSON extends SpeakeasyBase {
    /**
     * The ID of an asynchronous job that will be returned for tracking the status and result of the job.
     */
    jobId?: string;
    /**
     * Indicates whether the operation call succeeded.
     */
    success?: boolean;
}
export declare class POSTCreateOrderAsynchronouslyResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    /**
     * Accepted
     */
    postCreateOrderAsynchronously202ApplicationJSONObject?: POSTCreateOrderAsynchronously202ApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
