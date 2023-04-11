import { SpeakeasyBase } from "../../../internal/utils";
import { POSTSrpCreateType } from "./postsrpcreatetype";
/**
 * Creates an invoice for a subscription. If you have the Invoice Settlement feature enabled, a credit memo might also be created based on the [invoice and credit memo generation rule](https://knowledgecenter.zuora.com/CB_Billing/Invoice_Settlement/Credit_and_Debit_Memos/Rules_for_Generating_Invoices_and_Credit_Memos).
 *
 * @remarks
 *
 *
 * The billing documents generated
 * in this operation is only for this subscription, not for the entire
 * customer account.
 *
 *
 * Possible values:
 *
 * - `true`: An invoice is created. If you have the Invoice Settlement feature enabled, a credit memo might also be created.
 *
 *
 * - `false`: No invoice is created.
 *
 *
 * **Note:** This field is in Zuora REST API version control. Supported
 * minor versions are `211.0` or later. To use this field in the method,
 * you must set the `zuora-version` parameter to the minor version number
 * in the request header.
 *
 */
export declare enum POSTSubscriptionTypeRunBillingEnum {
    True = "true",
    False = "false"
}
/**
 * Container for custom fields of a Subscription object.
 *
 * @remarks
 *
 */
export declare class POSTSubscriptionType extends SpeakeasyBase {
    /**
     * The Bundle product structures from Zuora Quotes if you utilize Bundling in Salesforce. Do not change the value in this field.
     *
     * @remarks
     *
     */
    cpqBundleJsonIdQT?: string;
    /**
     * ID of the corresponding object in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    integrationIdNS?: string;
    /**
     * Status of the subscription's synchronization with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    integrationStatusNS?: string;
    /**
     * The closing date of the Opportunity. This field is used in Zuora data sources to report on Subscription metrics. If the subscription originated from Zuora Quotes, the value is populated with the value from Zuora Quotes.
     *
     * @remarks
     *
     */
    opportunityCloseDateQT?: Date;
    /**
     * The unique identifier of the Opportunity. This field is used in Zuora data sources to report on Subscription metrics. If the subscription originated from Zuora Quotes, the value is populated with the value from Zuora Quotes.
     *
     * @remarks
     *
     */
    opportunityNameQT?: string;
    /**
     * The NetSuite project that the subscription was created from. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    projectNS?: string;
    /**
     * The specific identifier for the type of business transaction the Quote represents such as New, Upsell, Downsell, Renewal or Churn. This field is used in Zuora data sources to report on Subscription metrics. If the subscription originated from Zuora Quotes, the value is populated with the value from Zuora Quotes.
     *
     * @remarks
     *
     */
    quoteBusinessTypeQT?: string;
    /**
     * The unique identifier of the Quote. This field is used in Zuora data sources to report on Subscription metrics. If the subscription originated from Zuora Quotes, the value is populated with the value from Zuora Quotes.
     *
     * @remarks
     *
     */
    quoteNumberQT?: string;
    /**
     * The Quote type that represents the subscription lifecycle stage such as New, Amendment, Renew or Cancel. This field is used in Zuora data sources to report on Subscription metrics. If the subscription originated from Zuora Quotes, the value is populated with the value from Zuora Quotes.
     *
     * @remarks
     *
     */
    quoteTypeQT?: string;
    /**
     * The NetSuite sales order than the subscription was created from. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    salesOrderNS?: string;
    /**
     * Date when the subscription was synchronized with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    syncDateNS?: string;
    /**
     * Customer account number or ID
     *
     * @remarks
     *
     */
    accountKey: string;
    /**
     * The priority order to apply credit memos and/or unapplied payments to an invoice. Possible item values are: `CreditMemo`, `UnappliedPayment`.
     *
     * @remarks
     *
     * **Note:**
     *   - This field is valid only if the `applyCredit` field is set to `true`.
     *   - If no value is specified for this field, the default priority order is used, ["CreditMemo", "UnappliedPayment"], to apply credit memos first and then apply unapplied payments.
     *   - If only one item is specified, only the items of the spedified type are applied to invoices. For example, if the value is `["CreditMemo"]`, only credit memos are used to apply to invoices.
     *
     */
    applicationOrder?: string[];
    /**
     * Whether to automatically apply credit memos or unapplied payments, or both to an invoice.
     *
     * @remarks
     *
     * If the value is `true`, the credit memo or unapplied payment, or both will be automatically applied to the invoice. If no value is specified or the value is `false`, no action is taken.
     *
     * **Note:** This field is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.
     *
     */
    applyCredit?: boolean;
    /**
     * Whether to automatically apply a credit balance to an invoice.
     *
     * @remarks
     *
     * If the value is `true`, the credit balance is applied to the invoice. If the value is `false`, no action is taken.
     *
     *
     * To view the credit balance adjustment, retrieve the details of the invoice using the Get Invoices method.
     *
     * Prerequisite: `invoice` must be `true`.
     *
     * **Note:**
     *   - If you are using the field `invoiceCollect` rather than the field `invoice`, the `invoiceCollect` value must be `true`.
     *   - This field is deprecated if you have the Invoice Settlement feature enabled.
     *
     */
    applyCreditBalance?: boolean;
    /**
     * If true, this subscription automatically renews at the end of the subscription term.
     *
     * @remarks
     *
     * This field is only required if the `termType` field is set to `TERMED`.
     *
     */
    autoRenew?: boolean;
    /**
     * Collects an automatic payment for a subscription. The collection generated in this operation is only for this subscription, not for the entire customer account.
     *
     * @remarks
     *
     * If the value is `true`, the automatic payment is collected. If the value is `false`, no action is taken.
     *
     * Prerequisite: The `invoice` or `runBilling` field must be `true`.
     *
     * **Note**: This field is only available if you set the `zuora-version` request header to `196.0` or later.
     *
     */
    collect?: boolean;
    /**
     * Effective contract date for this subscription, as yyyy-mm-dd
     *
     * @remarks
     *
     */
    contractEffectiveDate: Date;
    /**
     * The date on which the services or products within a subscription have been accepted by the customer, as yyyy-mm-dd.
     *
     * @remarks
     *
     * Default value is dependent on the value of other fields. See **Notes** section for more details.
     *
     */
    customerAcceptanceDate?: Date;
    /**
     * The date of the billing document, in `yyyy-mm-dd` format. It represents the invoice date for invoices, credit memo date for credit memos, and debit memo date for debit memos.
     *
     * @remarks
     *
     * - If this field is specified, the specified date is used as the billing document date.
     * - If this field is not specified, the date specified in the `targetDate` is used as the billing document date.
     *
     */
    documentDate?: Date;
    /**
     * The ID of the payment gateway instance. For example, `2c92c0f86078c4d5016091674bcc3e92`.
     *
     * @remarks
     *
     */
    gatewayId?: string;
    /**
     * The length of the period for the first subscription term. If `termType` is `TERMED`, then this field is required, and the value must be greater than `0`. If `termType` is `EVERGREEN`, this field is ignored.
     *
     * @remarks
     *
     */
    initialTerm?: number;
    /**
     * The period type for the first subscription term.
     *
     * @remarks
     *
     * This field is used with the `InitialTerm` field to specify the initial subscription term.
     *
     * Values are:
     *
     * * `Month` (default)
     * * `Year`
     * * `Day`
     * * `Week`
     *
     */
    initialTermPeriodType?: string;
    /**
     * **Note:** This field has been replaced by the `runBilling` field. The
     *
     * @remarks
     * `invoice` field is only available for backward compatibility.
     *
     *
     * Creates an invoice for a subscription. The invoice generated in this
     * operation is only for this subscription, not for the entire customer
     * account.
     *
     *
     * If the value is `true`, an invoice is created. If the value is
     * `false`, no action is taken. The default value is `true`.
     *
     *
     * This field is in Zuora REST API version control. Supported minor
     * versions are `196.0` and `207.0`. To use this field in the method, you
     * must set the zuora-version parameter to the minor version number in
     * the request header.
     *
     */
    invoice?: boolean;
    /**
     * **Note:** This field has been replaced by the `invoice` field
     *
     * @remarks
     * and the `collect` field. `invoiceCollect` is available only for backward compatibility.
     *
     *
     * If this field is set to `true`, an invoice is generated and payment collected automatically
     * during the subscription process. If `false`, no invoicing or payment takes
     * place. The invoice generated in this operation is only for this subscription,
     * not for the entire customer account.
     *
     *
     * **Note**: This field is only available if you set the `zuora-version` request header to `186.0`, `187.0`, `188.0`, or `189.0`.
     *
     */
    invoiceCollect?: boolean;
    /**
     * Invoice owner account number or ID.
     *
     * @remarks
     *
     * **Note:** This feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).
     *
     */
    invoiceOwnerAccountKey?: string;
    /**
     * Separates a single subscription from other subscriptions and invoices the charge independently.
     *
     * @remarks
     *
     * If the value is `true`, the subscription is billed separately from other subscriptions. If the value is `false`, the subscription is included with other subscriptions in the account invoice.
     *
     * The default value is `false`.
     *
     * Prerequisite: The default subscription setting Enable Subscriptions to be Invoiced Separately must be set to Yes.
     *
     */
    invoiceSeparately?: boolean;
    /**
     * **Note:** This field has been replaced by the `targetDate` field. The
     *
     * @remarks
     * `invoiceTargetDate` field is only available for backward
     * compatibility.
     *
     *
     * Date through which to calculate charges if an invoice is generated, as
     * yyyy-mm-dd. Default is current date.
     *
     *
     * This field is in Zuora REST API version control. Supported minor
     * versions are `207.0` and earlier.
     *
     */
    invoiceTargetDate?: Date;
    /**
     * String of up to 500 characters.
     *
     * @remarks
     *
     */
    notes?: string;
    /**
     * The ID of the payment method used for the payment.
     *
     * @remarks
     *
     */
    paymentMethodId?: string;
    /**
     * Specifies whether a termed subscription will remain termed or change to evergreen when it is renewed.
     *
     * @remarks
     *
     * Values:
     *
     * * `RENEW_WITH_SPECIFIC_TERM` (default)
     * * `RENEW_TO_EVERGREEN`
     *
     */
    renewalSetting?: string;
    /**
     * The length of the period for the subscription renewal term. Default is `0`.
     *
     * @remarks
     *
     */
    renewalTerm: number;
    /**
     * The period type for the subscription renewal term.
     *
     * @remarks
     *
     * This field is used with the `renewalTerm` field to specify the subscription renewal term.
     *
     * Values are:
     *
     * * `Month` (default)
     * * `Year`
     * * `Day`
     * * `Week`
     *
     */
    renewalTermPeriodType?: string;
    /**
     * Creates an invoice for a subscription. If you have the Invoice Settlement feature enabled, a credit memo might also be created based on the [invoice and credit memo generation rule](https://knowledgecenter.zuora.com/CB_Billing/Invoice_Settlement/Credit_and_Debit_Memos/Rules_for_Generating_Invoices_and_Credit_Memos).
     *
     * @remarks
     *
     *
     * The billing documents generated
     * in this operation is only for this subscription, not for the entire
     * customer account.
     *
     *
     * Possible values:
     *
     * - `true`: An invoice is created. If you have the Invoice Settlement feature enabled, a credit memo might also be created.
     *
     *
     * - `false`: No invoice is created.
     *
     *
     * **Note:** This field is in Zuora REST API version control. Supported
     * minor versions are `211.0` or later. To use this field in the method,
     * you must set the `zuora-version` parameter to the minor version number
     * in the request header.
     *
     */
    runBilling?: POSTSubscriptionTypeRunBillingEnum;
    /**
     * The date on which the services or products within a subscription have been activated and access has been provided to the customer, as yyyy-mm-dd.
     *
     * @remarks
     *
     * Default value is dependent on the value of other fields. See **Notes** section for more details.
     *
     */
    serviceActivationDate?: Date;
    /**
     * Container for one or more rate plans for this subscription.
     *
     * @remarks
     *
     */
    subscribeToRatePlans: POSTSrpCreateType[];
    /**
     * Subscription Number. The value can be up to 1000 characters.
     *
     * @remarks
     *
     * If you do not specify a subscription number when creating a subscription, Zuora will generate a subscription number automatically.
     *
     * If the account is created successfully, the subscription number is returned in the `subscriptionNumber` response field.
     *
     */
    subscriptionNumber?: string;
    /**
     * Date through which to calculate charges if an invoice or a credit memo is generated, as
     *
     * @remarks
     * yyyy-mm-dd. Default is current date.
     *
     *
     * **Note:** The credit memo is only available if you have the Invoice Settlement feature enabled.
     *
     *
     * This field is in Zuora REST API version control. Supported minor
     * versions are `211.0` and later. To use this field in the method, you
     * must set the  `zuora-version` parameter to the minor version number in
     * the request header.
     *
     */
    targetDate?: Date;
    /**
     * The date on which the subscription term begins, as yyyy-mm-dd. If this is a renewal subscription, this date is different from the subscription start date.
     *
     * @remarks
     *
     */
    termStartDate?: Date;
    /**
     * Possible values are: `TERMED`, `EVERGREEN`.
     *
     * @remarks
     *
     */
    termType: string;
}
