import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GETAllCustomObjectBulkJobsRequest extends SpeakeasyBase {
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
     * API version that determines the response schema. The default version is used if this parameter is not included. Specify `Zuora-Version` in the request header if you expect a specific response schema.
     */
    zuoraVersion?: Date;
    /**
     * The `cursor` points to the last job of the previous result set. The cursor job is not included in this query result. The call returns the first page if `cursor` is not provided and `pageSize` is valid.
     */
    cursor?: string;
    /**
     * Page size of the result. The maximum page size is 100. The defaut page size is 25.
     */
    pageSize?: number;
}
export declare class GETAllCustomObjectBulkJobsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    customObjectBulkJobResponseCollection?: shared.CustomObjectBulkJobResponseCollection;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
