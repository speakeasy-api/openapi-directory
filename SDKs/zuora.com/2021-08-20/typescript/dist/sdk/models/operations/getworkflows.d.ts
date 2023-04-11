import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GETWorkflowsRequest extends SpeakeasyBase {
    /**
     * `Bearer {token}` for a valid OAuth token.
     *
     * @remarks
     *
     */
    authorization: string;
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
     * If set to true, the operation retrieves workflows that have the callout trigger enabled. If set to false, the operation retrieves workflows that have the callout trigger disabled. If not specified, the operation will not use this filter.
     *
     * @remarks
     *
     */
    calloutTrigger?: boolean;
    /**
     * A CRON expession that specifies a schedule (for example, `0 0 * * *`). If specified, the operation retrieves the workflow that is run based on the specified schedule.
     *
     * @remarks
     *
     */
    interval?: string;
    /**
     * If specified, the operation retrieves the workflow that is in the specified name.
     *
     * @remarks
     *
     */
    name?: string;
    /**
     * If set to true, the operation retrieves workflows that have the ondemand trigger enabled. If set to false, the operation retrieves workflows that have the ondemand trigger disabled. If not specified, the operation will not use this filter.
     *
     * @remarks
     *
     */
    ondemandTrigger?: boolean;
    /**
     * If you want to retrieve only the workflows on a specific page, you can specify the `page` number in the query.
     *
     * @remarks
     *
     */
    page?: number;
    /**
     * The number of workflows shown in a single call. If the `page` parameter is not specified, the operation will return only the first page of results. If there are multiple pages of results, use it with the `page` parameter to get the results on subsequent pages.
     *
     * @remarks
     *
     */
    pageLength?: number;
    /**
     * If set to true, the operation retrieves workflows that have the scheduled trigger enabled. If set to false, the operation retrieves workflows that have the scheduled trigger disabled. If not specfied, the operation will not use this filter.
     *
     * @remarks
     *
     */
    scheduledTrigger?: boolean;
}
export declare class GETWorkflowsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    getWorkflowsResponse?: shared.GetWorkflowsResponse;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
