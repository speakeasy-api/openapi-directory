import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GETPaymentPartRequest extends SpeakeasyBase {
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
     * The unique ID of a specific payment part. You can get the payment part ID from the response of [List all parts of a payment](https://www.zuora.com/developer/api-reference/#operation/GET_PaymentParts).
     *
     * @remarks
     *
     */
    partid: string;
    /**
     * The unique ID of a payment. For example, 8a8082e65b27f6c3015b89e4344c16b1.
     *
     * @remarks
     *
     */
    paymentId: string;
}
export declare class GETPaymentPartResponse extends SpeakeasyBase {
    contentType: string;
    getPaymentPartType?: shared.GETPaymentPartType;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
