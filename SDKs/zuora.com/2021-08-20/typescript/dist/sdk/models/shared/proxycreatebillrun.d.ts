import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProxyCreateBillRun extends SpeakeasyBase {
    /**
     * ID of the account used for single account bill run.
     *
     * @remarks
     *
     * This field is only required if you create ad hoc bill run for a single customer account.
     *
     * **Character limit:** 32
     *
     */
    accountId?: string;
    /**
     * Determines whether to auto send email or not by this bill run once the bill run completes.
     *
     * @remarks
     *
     * **Note:** You must enable the [Support Bill Run Auto-Post Billing](https://knowledgecenter.zuora.com/CB_Billing/Billing_Settings/Define_Billing_Rules) rule to pass this field.
     *
     */
    autoEmail?: boolean;
    /**
     * Determines whether to auto post bill run or not once the bill run completes.
     *
     * @remarks
     *
     * **Note:** You must enable the [Support Bill Run Auto-Post Billing](https://knowledgecenter.zuora.com/CB_Billing/Billing_Settings/Define_Billing_Rules) rule to pass this field.
     *
     */
    autoPost?: boolean;
    /**
     * Determines whether to auto renew subscription or not by this bill run once the bill run completes.
     *
     * @remarks
     *
     */
    autoRenewal?: boolean;
    /**
     * Batch of accounts for this bill run.
     *
     * @remarks
     *
     * When creating ad hoc bill run for multiple customer accounts, this field is only required if the `BillCycleDay`
     *  field is not specified.
     *
     * **Character limit:** 20
     *
     * **Values:** AllBatches or Batchn where n is a number between 1 and 50.
     *
     */
    batch?: string;
    /**
     * The day of the bill cycle.
     *
     * @remarks
     *
     * When creating ad hoc bill run for multiple customer accounts, this field is only required if the `Batch` field is not specified.
     *
     * **Character limit:** 32
     *
     * **Values:** `AllBillCycleDays` or 01 - 31.
     *
     */
    billCycleDay?: string;
    /**
     * Charge type or types to be excluded, separated with comma.
     *
     * @remarks
     *
     * **Possible Values:** `OneTime`, `Recurring`, `Usage`, or a combination of these values.
     *
     * **Character limit:** 50
     *
     */
    chargeTypeToExclude?: string;
    /**
     * Invoice date for this bill run.
     *
     * @remarks
     *
     * **Character limit:** 29
     *
     */
    invoiceDate: Date;
    /**
     * Determines whether to suppress email for invoices with zero total or not for this bill run once the bill run completes. (Do not email invoices with 0 Invoice Total).
     *
     * @remarks
     *
     */
    noEmailForZeroAmountInvoice?: boolean;
    /**
     * Target date for this bill run. See [Create Bill Run](https://knowledgecenter.zuora.com/CB_Billing/J_Billing_Operations/G_Bill_Runs/Creating_Bill_Runs) for more information.
     *
     * @remarks
     *
     * **Character limit:** 29
     *
     */
    targetDate: Date;
}
