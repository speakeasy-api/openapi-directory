import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class POSTReconcileRefundRequest extends SpeakeasyBase {
    postReconcileRefundRequest: shared.POSTReconcileRefundRequest;
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
     * Unique ID of the refund.
     */
    refundId: string;
}
export declare class POSTReconcileRefundResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    postReconcileRefundResponse?: shared.POSTReconcileRefundResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
