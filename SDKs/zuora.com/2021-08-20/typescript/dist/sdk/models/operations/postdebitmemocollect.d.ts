import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class POSTDebitMemoCollectRequest extends SpeakeasyBase {
    debitMemoCollectRequest: shared.DebitMemoCollectRequest;
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
     * The ID of a posted debit memo. For example, 8a8082e65b27f6c3015ba419f3c2644e.
     *
     * @remarks
     *
     */
    debitMemoId: string;
}
export declare class POSTDebitMemoCollect200ApplicationJSONAppliedCreditMemos extends SpeakeasyBase {
    /**
     * The applied amount of the credit memo to the debit memo.
     *
     * @remarks
     *
     */
    appliedAmount?: number;
    /**
     * The unique ID of the credit memo.
     *
     * @remarks
     *
     */
    id?: string;
    /**
     * The unique identification number of the credit memo.
     *
     * @remarks
     *
     */
    number?: string;
    /**
     * The unapplied amount of the credit memo after applied to the debit memo.
     *
     * @remarks
     *
     */
    unappliedAmount?: number;
}
export declare class POSTDebitMemoCollect200ApplicationJSONAppliedPayments extends SpeakeasyBase {
    /**
     * The applied amount of the payment to the debit memo.
     *
     * @remarks
     *
     */
    appliedAmount?: number;
    /**
     * The unique ID of the payment.
     *
     * @remarks
     *
     */
    id?: string;
    /**
     * The unique identification number of the payment.
     *
     * @remarks
     *
     */
    number?: string;
    /**
     * The unapplied amount of the payment after applied to the debit memo.
     *
     * @remarks
     *
     */
    unappliedAmount?: number;
}
/**
 * The information about the debit memo that just collected.
 *
 * @remarks
 *
 */
export declare class POSTDebitMemoCollect200ApplicationJSONDebitMemo extends SpeakeasyBase {
    /**
     * The unique ID of the debit memo.
     *
     * @remarks
     *
     */
    id?: string;
    /**
     * The unique identification number of the debit memo.
     *
     * @remarks
     *
     */
    number?: string;
}
/**
 * The status of the payment.
 *
 * @remarks
 *
 */
export declare enum POSTDebitMemoCollect200ApplicationJSONProcessedPaymentStatusEnum {
    Processing = "Processing",
    Processed = "Processed",
    Error = "Error",
    Canceled = "Canceled"
}
/**
 * The information about the payment that newly processed to the debit memo.
 *
 * @remarks
 *
 */
export declare class POSTDebitMemoCollect200ApplicationJSONProcessedPayment extends SpeakeasyBase {
    /**
     * The total amount of the payment.
     *
     * @remarks
     *
     */
    amount?: number;
    /**
     * The ID of the gateway instance that processes the payment.
     *
     * @remarks
     *
     */
    gatewayId?: string;
    /**
     * The message returned from the payment gateway for the payment. This message is gateway-dependent.
     *
     * @remarks
     *
     */
    gatewayResponse?: string;
    /**
     * The code returned from the payment gateway for the payment. This code is gateway-dependent.
     *
     * @remarks
     *
     */
    gatewayResponseCode?: string;
    /**
     * The unique ID of the created payment. For example, 4028905f5a87c0ff015a87eb6b75007f.
     *
     * @remarks
     *
     */
    id?: string;
    /**
     * The unique identification number of the payment. For example, P-00000001.
     *
     * @remarks
     *
     */
    number?: string;
    /**
     * The unique ID of the payment method that the customer used to make the payment.
     *
     * @remarks
     *
     */
    paymentMethodId?: string;
    /**
     * The status of the payment.
     *
     * @remarks
     *
     */
    status?: POSTDebitMemoCollect200ApplicationJSONProcessedPaymentStatusEnum;
}
export declare class POSTDebitMemoCollect200ApplicationJSON extends SpeakeasyBase {
    /**
     * The information about which credit memo applied to the specific debit memo.
     *
     * @remarks
     *
     */
    appliedCreditMemos?: POSTDebitMemoCollect200ApplicationJSONAppliedCreditMemos[];
    /**
     * The information about which payment applied to the specific debit memo.
     *
     * @remarks
     *
     */
    appliedPayments?: POSTDebitMemoCollect200ApplicationJSONAppliedPayments[];
    /**
     * The information about the debit memo that just collected.
     *
     * @remarks
     *
     */
    debitMemo?: POSTDebitMemoCollect200ApplicationJSONDebitMemo;
    /**
     * The information about the payment that newly processed to the debit memo.
     *
     * @remarks
     *
     */
    processedPayment?: POSTDebitMemoCollect200ApplicationJSONProcessedPayment;
    /**
     * Returns `true` if the request was processed successfully.
     */
    success?: boolean;
}
export declare class POSTDebitMemoCollectResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    postDebitMemoCollect200ApplicationJSONObject?: POSTDebitMemoCollect200ApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
