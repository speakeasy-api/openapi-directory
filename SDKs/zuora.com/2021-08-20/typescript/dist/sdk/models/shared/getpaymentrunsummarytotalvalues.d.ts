import { SpeakeasyBase } from "../../../internal/utils";
export declare class GETPaymentRunSummaryTotalValues extends SpeakeasyBase {
    /**
     * **Note:** This field is only available if you have the Credit Balance feature enabled.
     *
     * @remarks
     *
     * The total amount of credit balance after the payment run is completed.
     *
     */
    totalValueOfCreditBalance?: string;
    /**
     * **Note:** This field is only available if you have the Invoice Settlement feature enabled.
     *
     * @remarks
     *
     * The total amount of credit memos that are successfully processed in the payment run.
     *
     */
    totalValueOfCreditMemos?: string;
    /**
     * **Note:** This field is only available if you have the Invoice Settlement feature enabled.
     *
     * @remarks
     *
     * The total amount of debit memos that are picked up for processing in the payment run.
     *
     */
    totalValueOfDebitMemos?: string;
    /**
     * The total amount of receivables associated with the payments with the status of `Error` and `Processing`.
     *
     * @remarks
     *
     */
    totalValueOfErrors?: string;
    /**
     * **Note:** This field is only available if you have the Invoice Settlement feature enabled.
     *
     * @remarks
     *
     * The total amount of invoices that are picked up for processing in the payment run.
     *
     */
    totalValueOfInvoices?: string;
    /**
     * The total amount of payments that are successfully processed in the payment run.
     *
     * @remarks
     *
     */
    totalValueOfPayments?: string;
    /**
     * The total amount of receivables associated with the payment run.
     *
     * @remarks
     *
     * The value of this field is the sum of the value of the `totalValueOfInvoices` field and that of the `totalValueOfDebitMemos` field.
     *
     */
    totalValueOfReceivables?: string;
    /**
     * **Note:** This field is only available if you have the Invoice Settlement feature enabled.
     *
     * @remarks
     *
     * The total amount of unapplied payments that are successfully processed in the payment run.
     *
     */
    totalValueOfUnappliedPayments?: number;
    /**
     * **Note:** This field is only available if you have the Invoice Settlement feature enabled.
     *
     * @remarks
     *
     * The total amount of debit memos with remaining positive balances after the payment run is completed.
     *
     */
    totalValueOfUnprocessedDebitMemos?: string;
    /**
     * **Note:** This field is only available if you have the Invoice Settlement feature enabled.
     *
     * @remarks
     *
     * The total amount of invoices with remaining positive balances after the payment run is completed.
     *
     */
    totalValueOfUnprocessedInvoices?: string;
    /**
     * The total amount of receivables with remaining positive balances after the payment run is completed.
     *
     * @remarks
     *
     */
    totalValueOfUnprocessedReceivables?: string;
}
