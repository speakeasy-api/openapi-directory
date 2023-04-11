import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Whether the credit balance adjustment increases or decrease the amount of the credit balance.
 *
 * @remarks
 *
 */
export declare enum ProxyCreateCreditBalanceAdjustmentTypeEnum {
    Decrease = "Decrease",
    Increase = "Increase"
}
/**
 * Container for custom fields of a Credit Balance Adjustment object.
 *
 * @remarks
 *
 */
export declare class ProxyCreateCreditBalanceAdjustment extends SpeakeasyBase {
    /**
     * An active accounting code in your Zuora [Chart of Accounts](https://knowledgecenter.zuora.com/CB_Billing/W_Billing_and_Payments_Settings/V_Configure_Accounting_Codes/D_Set_Up_Chart_of_Accounts).
     *
     * @remarks
     *
     * The [accounting code](https://knowledgecenter.zuora.com/BC_Subscription_Management/Product_Catalog/A_Product_Catalog_Concepts/Accounting_Codes) for the credit balance adjustment. Typically, an accounting code for a credit balance adjustment maps to a bank account in your accounting system.
     *
     */
    accountingCode?: string;
    /**
     * The date when the credit balance adjustment is applied.
     *
     * @remarks
     *
     * With the Future Dated Credit Balance Adjustment feature enabled, you can use this field to specify when the credit balance adjustment is applied. If not specified, the value defaults to the latter date of the date when the API operation is called and the invoice date.
     *
     * With the Future Dated Credit Balance Adjustment feature disabled, if no value is specified for this field, the value defaults to the date when the API operation is called. If you specify a value for this field, the value must be the date when the API operation is called.
     *
     */
    adjustmentDate?: Date;
    /**
     * The amount of the adjustment.
     *
     * @remarks
     *
     */
    amount: number;
    /**
     * Your comments about the credit balance adjustment.
     *
     * @remarks
     *
     */
    comment?: string;
    /**
     * ID of the corresponding object in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    integrationIdNS?: string;
    /**
     * Status of the credit balance adjustment's synchronization with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    integrationStatusNS?: string;
    /**
     * A code identifying the reason for the transaction. Must be an existing [reason code](https://knowledgecenter.zuora.com/CB_Billing/K_Payment_Operations/Reason_Codes_for_Payment_Operations) or empty. If you do not specify a value, Zuora uses the default reason code.
     *
     * @remarks
     *
     */
    reasonCode?: string;
    /**
     * The ID of the payment that the credit balance adjustment is for.
     *
     * @remarks
     *
     */
    referenceId?: string;
    /**
     * The ID of the object that the credit balance adjustment is applied to. You must specify a value for either the `SourceTransactionId` field or the `SourceTransactionNumber` field.
     *
     * @remarks
     *
     * The value of this field must be an invoice ID.
     *
     */
    sourceTransactionId?: string;
    /**
     * The number of the object that the credit balance adjustment is applied to. You must specify a value for either the `SourceTransactionId` field or the `SourceTransactionNumber` field.
     *
     * @remarks
     *
     * The value of this field must be an invoice number.
     *
     */
    sourceTransactionNumber?: string;
    /**
     * Date when the credit balance adjustment was sychronized with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    syncDateNS?: string;
    /**
     * Whether the credit balance adjustment increases or decrease the amount of the credit balance.
     *
     * @remarks
     *
     */
    type: ProxyCreateCreditBalanceAdjustmentTypeEnum;
}
