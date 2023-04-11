import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Container for custom fields of a Subscription object.
 *
 * @remarks
 *
 */
export declare class ProxyModifySubscription extends SpeakeasyBase {
    /**
     *  This field can be updated when **Status** is `Draft`. The ID of a valid account ID.
     */
    accountId?: string;
    /**
     *  This field can be updated when **Status** is `Draft`. Indicates if the subscription automatically renews at the end of the term.
     *
     * @remarks
     * **Values**: `true`, `false`
     */
    autoRenew?: boolean;
    /**
     *  The date of the Amendment object.
     *
     * @remarks
     * **Values**: inherited from `Amendment.EffectiveDate`
     */
    cancelledDate?: Date;
    /**
     * The date when the customer accepts the contract.
     *
     * @remarks
     *
     * This field can be updated when **Status** is `Pending Acceptance`.
     *
     * **Note** : This field is only required in the Subscribe call if the [Require Customer Acceptance of Orders?](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Billing_Settings/Define_Default_Subscription_and_Order_Settings#Require_Customer_Acceptance_of_Orders.3F) setting is set to `Yes`. If this setting is set to `Yes`:
     *
     *  * If the `ServiceActivationDate` field is required, you must set this field, `ServiceActivationDate`, and `ContractEffectiveDate` fields in the Subscribe call to activate a subscription.
     *  * If the `ServiceActivationDate` field is not required, you must set both this field and the `ContractEffectiveDate` field in the Subscribe call to activate a subscription. If you only set a valid date in the `ContractEffectiveDate` field, the Subscribe call still returns success, but the subscription is in `Pending Acceptance` status.
     *
     * This field can also be updated when the subscription is still on version one (has not been amended before) and the [Allow update Subscription trigger dates?](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Billing_Settings/Define_Default_Subscription_and_Order_Settings#Allow_update_Subscription_trigger_dates.3F) setting in Billing Settings is set to `Yes`.
     *
     */
    contractAcceptanceDate?: Date;
    /**
     * The date when the contract takes effect.
     *
     * @remarks
     *
     * This field can be updated when **Status** is `Draft`.
     *
     * **Note**: This field is required in the Subscribe call. If you set the value of this field to null and both the ServiceActivationDate and ContractAcceptanceDate fields are not required, the Subscribe call still returns success, but the new subscription is in `DRAFT` status. To activate the subscription, you must set a valid date to this field.
     *
     * This field can also be updated when the subscription is still on version one (has not been amended before) and the [Allow update Subscription trigger dates?](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Billing_Settings/Define_Default_Subscription_and_Order_Settings#Allow_update_Subscription_trigger_dates.3F) setting in Billing Settings is set to "Yes".
     *
     */
    contractEffectiveDate?: Date;
    /**
     * The Bundle product structures from Zuora Quotes if you utilize Bundling in Salesforce. Do not change the value in this field.
     *
     * @remarks
     *
     */
    cpqBundleJsonIdQT?: string;
    /**
     *  The period type for the current subscription term. This field is used with the CurrentTerm field to specify the current subscription term.
     *
     * @remarks
     * **Values**:
     *
     * - `Month` (default)
     * - `Year`
     * - `Day`
     * - `Week`
     *
     */
    currentTermPeriodType?: string;
    /**
     *  The length of the period for the first subscription term. This field can be updated when Status is `Draft`.
     *
     * @remarks
     * **Required**: If TermType is Termed **Character limit**: 20 **Values**: any valid number.
     */
    initialTerm?: number;
    /**
     *  The period type for the first subscription term.
     *
     * @remarks
     * **Values**:
     *
     * - `Month` (default)
     * - `Year`
     * - `Day`
     * - `Week`
     * **Note**:
     *
     * - This field can be updated when Status is `Draft`.
     * - This field is used with the InitialTerm field to specify the initial subscription term.
     *
     */
    initialTermPeriodType?: string;
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
     *  This field can be updated when **Status** is `Draft`. A valid account ID.
     */
    invoiceOwnerId?: string;
    /**
     *  Determines if the subscription is invoiced separately. If `TRUE`, then all charges for this subscription are collected into the subscription's own invoice.
     *
     * @remarks
     * **Values**: `TRUE`, `FALSE `(default)
     */
    isInvoiceSeparate?: boolean;
    /**
     *  The unique identifier of the subscription. If you don't specify a value, then Zuora generates a name automatically. Whether auto-generated or manually specified, the subscription name must be unique. Otherwise an error will occur.
     *
     * @remarks
     * **Character limit**: 100 **Values**: one of the following:
     *
     * - leave null to automatically generate
     * - a string of 100 characters or fewer
     *
     */
    name?: string;
    /**
     *  Use this field to record comments about the subscription.
     *
     * @remarks
     * **Character limit**: 500 **Values**: a string of 500 characters or fewer
     */
    notes?: string;
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
     *  This field can be updated when **Status** is `Draft`. Specifies whether a termed subscription will remain termed or change to evergreen when it is renewed.
     *
     * @remarks
     * **Required**: If TermType is Termed **Values**: `RENEW_WITH_SPECIFIC_TERM `(default), `RENEW_TO_EVERGREEN`
     */
    renewalSetting?: string;
    /**
     *  The length of the period for the subscription renewal term. This field can be updated when **Status** is `Draft`. **Required**: If TermType is Termed.
     *
     * @remarks
     * **Character limit**: 20 **Values**: one of the following:
     *
     * - leave null to default to `0`
     * - any number
     *
     */
    renewalTerm?: number;
    /**
     *  The period type for the subscription renewal term.
     *
     * @remarks
     * **Values**:
     *
     * - `Month` (default)
     * - `Year`
     * - `Day`
     * - `Week`
     * **Note**:
     *
     * - This field is used with the RenewalTerm field to specify the subscription renewal term.
     * - This field can be updated when Status is `Draft`.
     *
     */
    renewalTermPeriodType?: string;
    /**
     * The NetSuite sales order than the subscription was created from. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    salesOrderNS?: string;
    /**
     * The date when the subscription is activated.
     *
     * @remarks
     *
     * **Character limit**: 29
     *
     * This field can be updated when **Status** is `Pending Activation`.
     *
     * **Note**: This field is only required in the Subscribe call if the [Require Service Activation of Orders?](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Billing_Settings/Define_Default_Subscription_and_Order_Settings#Require_Service_Activation_of_Orders.3F) setting is set to `Yes`. If this setting is set to `Yes`:
     *
     *  * If the `ContractAcceptanceDate` field is required, you must set this field, `ContractAcceptanceDate`, and `ContractEffectiveDate` fields in the Subscribe call to activate a subscription.
     *  * If the `ContractAcceptanceDate` field is not required, you must set both this field and the `ContractEffectiveDate` field in the Subscribe call to activate a subscription. If you only set a valid date in the `ContractEffectiveDate` field, the Subscribe call still returns success, but the subscription is in `Pending Activation` status.
     *
     * This field can also be updated when the subscription is still on version one (has not been amended before) and the [Allow update Subscription trigger dates?](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Billing_Settings/Define_Default_Subscription_and_Order_Settings#Allow_update_Subscription_trigger_dates.3F) setting in Billing Settings is set to "Yes".
     *
     */
    serviceActivationDate?: Date;
    /**
     *  The status of the subscription.
     *
     * @remarks
     * **Character limit**: 17 **Values**: automatically generated **Possible values**: one of the following:
     *
     * - `Draft`
     * - `Pending Activation`
     * - `Pending Acceptance`
     * - `Active`
     * - `Cancelled`
     * - `Expired`
     * - `Suspended` (This value is in **Limited Availability**.)
     *
     */
    status?: string;
    /**
     * Date when the subscription was synchronized with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    syncDateNS?: string;
    /**
     *  This field can be updated when **Status** is `Draft`. The date when the subscription term begins. If this is a renewal subscription, then this date is different from the subscription start date.
     *
     * @remarks
     * **Character limit**: 29 **Version notes**: --
     */
    termStartDate?: Date;
    /**
     *  This field can be updated when **Status** is `Draft`. Indicates if a subscription is termed or evergreen.
     *
     * @remarks
     * **Character limit**: 9 **Values**: `TERMED`, `EVERGREEN`
     */
    termType?: string;
    /**
     *  The version number of the subscription.
     *
     * @remarks
     * **Values**: automatically generated
     */
    version?: number;
}
