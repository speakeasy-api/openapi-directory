import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The status of the newly generated payment.
 *
 * @remarks
 *
 * **Note:** This field is only available if `type` is `Payment`.
 *
 */
export declare enum GETPaymentRunDataTransactionElementResponseStatusEnum {
    Processed = "Processed",
    Processing = "Processing",
    Error = "Error"
}
/**
 * The type of the current transaction.
 *
 * @remarks
 *
 */
export declare enum GETPaymentRunDataTransactionElementResponseTypeEnum {
    Payment = "Payment",
    CreditMemo = "CreditMemo",
    UnappliedPayment = "UnappliedPayment",
    CreditBalanceAdjustment = "CreditBalanceAdjustment"
}
export declare class GETPaymentRunDataTransactionElementResponse extends SpeakeasyBase {
    /**
     * The total amount of the newly generated payment.
     *
     * @remarks
     *
     * **Note:** This field is only available if `type` is `Payment`.
     *
     */
    amount?: number;
    /**
     * The amount applied to the record.
     *
     * @remarks
     *
     */
    appliedAmount?: number;
    /**
     * The error code of the response.
     *
     * @remarks
     *
     * **Note:** This field is only available if `type` is `Payment`.
     *
     */
    errorCode?: string;
    /**
     * The detailed information of the error response.
     *
     * @remarks
     *
     * **Note:** This field is only available if `type` is `Payment`.
     */
    errorMessage?: string;
    /**
     * The ID of the current transaction.
     *
     * @remarks
     *
     */
    id?: string;
    /**
     * The status of the newly generated payment.
     *
     * @remarks
     *
     * **Note:** This field is only available if `type` is `Payment`.
     *
     */
    status?: GETPaymentRunDataTransactionElementResponseStatusEnum;
    /**
     * The type of the current transaction.
     *
     * @remarks
     *
     */
    type?: GETPaymentRunDataTransactionElementResponseTypeEnum;
}
