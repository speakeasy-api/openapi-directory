import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The status of the created payment run.
 *
 * @remarks
 *
 */
export declare enum GETPaymentRunTypeStatusEnum {
    Pending = "Pending",
    Processing = "Processing",
    Completed = "Completed",
    Error = "Error",
    Canceled = "Canceled"
}
export declare class GETPaymentRunType extends SpeakeasyBase {
    /**
     * The ID of the customer account associated with the payment run.
     *
     * @remarks
     *
     */
    accountId?: string;
    /**
     * **Note:** This field is only available if you have the Credit Balance feature enabled and the Invoice Settlement feature disabled.
     *
     * @remarks
     *
     * Whether to apply credit balances in the payment run. This field is only available when you have Invoice Settlement feature disabled.
     *
     */
    applyCreditBalance?: boolean;
    /**
     * **Note:** This field is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     * @remarks
     *
     * Whether to automatically apply a posted credit memo to one or more receivables in the payment run.
     *
     */
    autoApplyCreditMemo?: boolean;
    /**
     * **Note:** This field is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     * @remarks
     *
     * Whether to automatically apply unapplied payments to  one or more receivables in the payment run.
     *
     */
    autoApplyUnappliedPayment?: boolean;
    /**
     * The alias name given to a batch.
     *
     * @remarks
     *
     */
    batch?: string;
    /**
     * The billing cycle day (BCD), the day of the month when a bill run generates invoices for the account.
     *
     * @remarks
     *
     */
    billCycleDay?: string;
    /**
     * The ID of the bill run.
     *
     * @remarks
     *
     */
    billingRunId?: string;
    /**
     * Whether to process electronic payments during the execution of payment runs.
     *
     * @remarks
     *
     */
    collectPayment?: boolean;
    /**
     * The date and time when the payment run is completed, in `yyyy-mm-dd hh:mm:ss` format. For example, 2017-03-01 11:39:58.
     *
     * @remarks
     *
     */
    completedOn?: Date;
    /**
     * **Note:** The **Process Electronic Payment** permission also needs to be allowed for a Manage Payment Runs role to work. See [Payments Roles](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/A_Administrator_Settings/User_Roles/e_Payments_Roles) for more information.
     *
     * @remarks
     *
     * Whether to process a single payment for all receivables that are due on an account.
     *
     */
    consolidatedPayment?: boolean;
    /**
     * The ID of the Zuora user who created the payment run.
     *
     * @remarks
     *
     */
    createdById?: string;
    /**
     * The date and time when the payment run was created, in `yyyy-mm-dd hh:mm:ss` format. For example, 2017-03-01 15:31:10.
     *
     * @remarks
     *
     */
    createdDate?: Date;
    /**
     * A currency defined in the web-based UI administrative settings.
     *
     * @remarks
     *
     */
    currency?: string;
    /**
     * The date and time when the payment run is executed, in `yyyy-mm-dd hh:mm:ss` format. For example, 2017-03-01 11:30:37.
     *
     * @remarks
     *
     */
    executedOn?: Date;
    /**
     * The ID of the payment run.
     *
     * @remarks
     *
     */
    id?: string;
    /**
     * The identification number of the payment run.
     *
     * @remarks
     *
     */
    number?: string;
    /**
     * The ID of the gateway instance that processes the payment.
     *
     * @remarks
     *
     */
    paymentGatewayId?: string;
    /**
     * **Note:** The **Process Electronic Payment** permission also needs to be allowed for a Manage Payment Runs role to work. See [Payments Roles](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/A_Administrator_Settings/User_Roles/e_Payments_Roles) for more information.
     *
     * @remarks
     *
     * Whether to process payments even if the default payment method is closed.
     *
     */
    processPaymentWithClosedPM?: boolean;
    /**
     * The date and time when the scheduled payment run is to be executed for collecting payments.
     *
     * @remarks
     *
     */
    runDate?: Date;
    /**
     * The status of the created payment run.
     *
     * @remarks
     *
     */
    status?: GETPaymentRunTypeStatusEnum;
    /**
     * Returns `true` if the request was processed successfully.
     *
     * @remarks
     *
     */
    success?: boolean;
    /**
     * The target date used to determine which receivables to be collected in the payment run.
     *
     * @remarks
     *
     */
    targetDate?: Date;
    /**
     * The ID of the Zuora user who last updated the payment run.
     *
     * @remarks
     *
     */
    updatedById?: string;
    /**
     * The date and time when the payment run was last updated, in `yyyy-mm-dd hh:mm:ss` format. For example, 2017-03-02 15:36:10.
     *
     * @remarks
     *
     */
    updatedDate?: Date;
}
