import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PUTVerifyPaymentMethodsRequest extends SpeakeasyBase {
    putVerifyPaymentMethodType: shared.PUTVerifyPaymentMethodType;
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
     * The ID of the payment method to be verified.
     *
     * @remarks
     *
     */
    paymentMethodId: string;
}
export declare class PUTVerifyPaymentMethodsResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    putVerifyPaymentMethodResponseType?: shared.PUTVerifyPaymentMethodResponseType;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
