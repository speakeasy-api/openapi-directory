import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostDebitMemoCollectPathParams extends SpeakeasyBase {
    debitMemoId: string;
}
export declare class PostDebitMemoCollectHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PostDebitMemoCollect200ApplicationJsonAppliedCreditMemos extends SpeakeasyBase {
    appliedAmount?: number;
    id?: string;
    number?: string;
    unappliedAmount?: number;
}
export declare class PostDebitMemoCollect200ApplicationJsonAppliedPayments extends SpeakeasyBase {
    appliedAmount?: number;
    id?: string;
    number?: string;
    unappliedAmount?: number;
}
/**
 * The information about the debit memo that just collected.
 *
**/
export declare class PostDebitMemoCollect200ApplicationJsonDebitMemo extends SpeakeasyBase {
    id?: string;
    number?: string;
}
export declare enum PostDebitMemoCollect200ApplicationJsonProcessedPaymentStatusEnum {
    Processing = "Processing",
    Processed = "Processed",
    Error = "Error",
    Canceled = "Canceled"
}
/**
 * The information about the payment that newly processed to the debit memo.
 *
**/
export declare class PostDebitMemoCollect200ApplicationJsonProcessedPayment extends SpeakeasyBase {
    amount?: number;
    gatewayId?: string;
    gatewayResponse?: string;
    gatewayResponseCode?: string;
    id?: string;
    number?: string;
    paymentMethodId?: string;
    status?: PostDebitMemoCollect200ApplicationJsonProcessedPaymentStatusEnum;
}
export declare class PostDebitMemoCollect200ApplicationJson extends SpeakeasyBase {
    appliedCreditMemos?: PostDebitMemoCollect200ApplicationJsonAppliedCreditMemos[];
    appliedPayments?: PostDebitMemoCollect200ApplicationJsonAppliedPayments[];
    debitMemo?: PostDebitMemoCollect200ApplicationJsonDebitMemo;
    processedPayment?: PostDebitMemoCollect200ApplicationJsonProcessedPayment;
    success?: boolean;
}
export declare class PostDebitMemoCollectRequest extends SpeakeasyBase {
    pathParams: PostDebitMemoCollectPathParams;
    headers: PostDebitMemoCollectHeaders;
    request: shared.DebitMemoCollectRequest;
}
export declare class PostDebitMemoCollectResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    postDebitMemoCollect200ApplicationJSONObject?: PostDebitMemoCollect200ApplicationJson;
    statusCode: number;
}
