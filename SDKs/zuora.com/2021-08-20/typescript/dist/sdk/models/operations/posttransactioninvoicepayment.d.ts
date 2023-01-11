import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostTransactionInvoicePaymentHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
    zuoraVersion?: string;
}
export declare class PostTransactionInvoicePaymentRequest extends SpeakeasyBase {
    headers: PostTransactionInvoicePaymentHeaders;
    request: shared.PostInvoiceCollectType;
}
export declare class PostTransactionInvoicePaymentResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    postInvoiceCollectResponseType?: shared.PostInvoiceCollectResponseType;
    statusCode: number;
}
