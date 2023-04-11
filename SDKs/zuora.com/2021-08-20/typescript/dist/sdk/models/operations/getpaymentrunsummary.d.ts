import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GETPaymentRunSummaryRequest extends SpeakeasyBase {
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
     * The unique ID of a payment run. For example, 402890245f097f39015f0f074a2e0566.
     *
     * @remarks
     *
     */
    paymentRunId: string;
}
export declare class GETPaymentRunSummaryResponse extends SpeakeasyBase {
    contentType: string;
    getPaymentRunSummaryResponse?: shared.GETPaymentRunSummaryResponse;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
