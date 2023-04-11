import { SpeakeasyBase } from "../../../internal/utils";
import { GETPaymentRunSummaryTotalValues } from "./getpaymentrunsummarytotalvalues";
export declare class GETPaymentRunSummaryResponse extends SpeakeasyBase {
    /**
     * **Note:** This field is only available if you have the Credit Balance feature enabled.
     *
     * @remarks
     *
     * The number of credit balance adjustments that are successfully processed in the payment run.
     *
     */
    numberOfCreditBalanceAdjustments?: number;
    /**
     * **Note:** This field is only available if you have the Invoice Settlement feature enabled.
     *
     * @remarks
     *
     * The total number of credit memos that are successfully processed in the payment run.
     *
     */
    numberOfCreditMemos?: number;
    /**
     * **Note:** This field is only available if you have the Invoice Settlement feature enabled.
     *
     * @remarks
     *
     * The total number of debit memos that are picked up for processing in the payment run.
     *
     */
    numberOfDebitMemos?: number;
    /**
     * The number of input data that are processed with errors.
     *
     * @remarks
     *
     */
    numberOfErrorInputData?: number;
    /**
     * The number of payments with the status of `Error` and `Processing`.
     *
     * @remarks
     *
     */
    numberOfErrors?: number;
    /**
     * The total number of input data.
     *
     * @remarks
     *
     */
    numberOfInputData?: number;
    /**
     * **Note:** This field is only available if you have the Invoice Settlement feature enabled.
     *
     * @remarks
     *
     * The total number of invoices that are picked up for processing in the payment run.
     *
     */
    numberOfInvoices?: number;
    /**
     * The number of payments that are successfully processed in the payment run.
     *
     * @remarks
     *
     */
    numberOfPayments?: number;
    /**
     * The number of input data that are successfully processed.
     *
     * @remarks
     *
     */
    numberOfProcessedInputData?: number;
    /**
     * The total number of receivables that are picked up for processing in the payment run.
     *
     * @remarks
     *
     * The value of this field is the sum of the value of the `numberOfInvoices` field and that of the `numberOfDebitMemos` field.
     *
     */
    numberOfReceivables?: number;
    /**
     * **Note:** This field is only available if you have the Invoice Settlement feature enabled.
     *
     * @remarks
     *
     * The number of unapplied payments that are successfully processed in the payment run.
     *
     */
    numberOfUnappliedPayments?: number;
    /**
     * **Note:** This field is only available if you have the Invoice Settlement feature enabled.
     *
     * @remarks
     *
     * The number of debit memos with remaining positive balances after the payment run is completed.
     *
     */
    numberOfUnprocessedDebitMemos?: number;
    /**
     * **Note:** This field is only available if you have the Invoice Settlement feature enabled.
     *
     * @remarks
     *
     * The number of invoices with remaining positive balances after the payment run is completed.
     *
     */
    numberOfUnprocessedInvoices?: number;
    /**
     * The number of receivables with remaining positive balances after the payment run is completed.
     *
     * @remarks
     *
     */
    numberOfUnprocessedReceivables?: number;
    /**
     * Returns `true` if the request was processed successfully.
     *
     * @remarks
     *
     */
    success?: boolean;
    /**
     * Container for total values.
     *
     * @remarks
     *
     */
    totalValues?: GETPaymentRunSummaryTotalValues[];
}
