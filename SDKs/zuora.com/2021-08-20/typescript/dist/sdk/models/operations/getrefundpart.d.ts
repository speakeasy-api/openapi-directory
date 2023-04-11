import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GETRefundPartRequest extends SpeakeasyBase {
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
     * The unique ID of a refund. For example, 4028905f5a87c0ff015a889e590e00c9.
     *
     * @remarks
     *
     */
    refundId: string;
    /**
     * The unique ID of a specific refund part. You can get the refund part ID from the response of [List all parts of a refund](https://www.zuora.com/developer/api-reference/#operation/GET_RefundParts).
     *
     * @remarks
     *
     */
    refundpartid: string;
}
export declare class GETRefundPartResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    refundPartResponseType?: shared.RefundPartResponseType;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
