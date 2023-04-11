import { SpeakeasyBase } from "../../../internal/utils";
export declare class PUTPaymentRunRequest extends SpeakeasyBase {
    /**
     * The ID of the customer account associated with the payment run.
     *
     * @remarks
     *
     * This field conflicts with each of the `batch`, `billCycleDay`, `currency`, `paymentGatewayId`, and `billingRunId` fields. If there are such conflicts, an error occurs and an error message is returned.
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
     * The alias name given to a batch. The batch name is a string of 50 characters or less.
     *
     * @remarks
     *
     * This field conflicts with the `accountId` field. If they are both specified in the request body, an error occurs and an error message is returned.
     *
     */
    batch?: string;
    /**
     * The billing cycle day (BCD), the day of the month when a bill run generates invoices for the account. The value must be equal to or less then 31, and 31 is mean the EOM.
     *
     * @remarks
     *
     * This field conflicts with the `accountId` field. If they are both specified in the request body, an error occurs and an error message is returned.
     *
     */
    billCycleDay?: string;
    /**
     * The ID of a bill run.
     *
     * @remarks
     *
     * This field conflicts with the `accountId` field. If they are both specified in the request body, an error occurs and an error message is returned.
     *
     */
    billingRunId?: string;
    /**
     * Whether to process electronic payments during the execution of payment runs.
     *
     * @remarks
     *
     * If the Payment user permission "Process Electronic Payment" is disabled, this field will be ignored.
     *
     */
    collectPayment?: boolean;
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
     * A currency defined in the web-based UI administrative settings.
     *
     * @remarks
     *
     * This field conflicts with the `accountId` field. If they are both specified in the request body, an error occurs and an error message is returned.
     *
     */
    currency?: string;
    /**
     * The ID of the gateway instance that processes the payment.
     *
     * @remarks
     *
     * This field conflicts with the `accountId` field. If they are both specified in the request body, an error occurs and an error message is returned.
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
     * The date and time when the scheduled payment run is to be executed, in `yyyy-mm-dd hh:mm:ss` format. The backend will ignore mintues and seconds in the field value. For example, if you specify `2017-03-01 11:30:37` for this value, this payment run will be run at 2017-03-01 11:00:00.
     *
     * @remarks
     *
     */
    runDate?: Date;
    /**
     * The target date used to determine which receivables to be paid in the payment run. The payments are collected for all receivables with the due date no later than the target date.
     *
     * @remarks
     *
     */
    targetDate?: Date;
}
