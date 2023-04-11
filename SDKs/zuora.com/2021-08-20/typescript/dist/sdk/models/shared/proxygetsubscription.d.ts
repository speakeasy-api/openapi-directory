import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Container for custom fields of a Subscription object.
 *
 * @remarks
 *
 */
export declare class ProxyGetSubscription extends SpeakeasyBase {
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
     *  The date on which the subscription was canceled.
     */
    cancelledDate?: Date;
    /**
     *  The date when the customer accepts the contract. This field can be updated when **Status** is `Draft`.
     */
    contractAcceptanceDate?: Date;
    /**
     *  The date when the contract takes effect. This field can be updated when **Status** is `Draft`.
     *
     * @remarks
     * **Note**: This field is required in the subscribe call. If you set the value of this field to null and both the ServiceActivationDate and ContractAcceptanceDate fields are not required, the subscribe call still returns success, but the new subscription is in `DRAFT` status. To activate the subscription, you must set a valid date to this field.
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
     * The user ID of the person who created the subscription. **Character limit**: 32 **Values**: automatically generated
     */
    createdById?: string;
    /**
     *  The date the subscription was created. This value is the same as the OriginalCreatedDate value until the subscription is amended.
     *
     * @remarks
     * **Values**: automatically generated
     */
    createdDate?: Date;
    /**
     *  The account ID that created the subscription or the amended subscription.
     *
     * @remarks
     * **Character limit**: 32 **Values**: automatically generated
     */
    creatorAccountId?: string;
    /**
     *  The account ID that owns the invoices associated with the subscription or the amended subscription.
     *
     * @remarks
     * **Character limit**: 32 **Values**: automatically generated
     */
    creatorInvoiceOwnerId?: string;
    /**
     *  The length of the period for the current subscription term. If TermType is set to `TERMED`, this field is required and must be greater than `0`. If TermType is set to `EVERGREEN`, this value is ignored. Default is `0`.
     *
     * @remarks
     * **Character limit**: 20 **Values**: automatically generated
     */
    currentTerm?: number;
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
     * Object identifier.
     */
    id?: string;
    /**
     *  The length of the period for the first subscription term. This field can be updated when Status is `Draft`.
     *
     * @remarks
     * **Required**: If TermType is Termed **Character limit**: 20 **Values**: any valid number. The default value is 0.
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
     * **V****alues**: `TRUE`, `FALSE `(default)
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
     *  The date when the subscription was originally created. This value is the same as the CreatedDate value until the subscription is amended.
     *
     * @remarks
     * **Values**: automatically generated
     */
    originalCreatedDate?: Date;
    /**
     *  The original ID of this subscription.
     *
     * @remarks
     * **Values**: automatically generated
     */
    originalId?: string;
    /**
     *  The subscription ID immediately prior to the current subscription.
     *
     * @remarks
     * **Character limit**: 32 **Values**: automatically generated
     */
    previousSubscriptionId?: string;
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
     *  The length of the period for the subscription renewal term. This field can be updated when **Status** is `Draft`.
     *
     * @remarks
     * **Required**: If TermType is Termed.
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
     * An auto-generated decimal value uniquely tagged with a subscription. The value always contains one decimal place, for example, the revision of a new subscription is 1.0. If a further version of the subscription is created, the Revision value will be increased by 1. Also, the Revision value is always incremental regardless of deletion of subscription versions.
     *
     * @remarks
     * **Note:** To get this field, you must set the Zuora WSDL version to 107.0 or over in the `X-Zuora-WSDL-Version` header parameter.
     *
     */
    revision?: string;
    /**
     * The NetSuite sales order than the subscription was created from. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    salesOrderNS?: string;
    /**
     *  The date when the subscription is activated. This field can be updated when **Status** is `Draft`.
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
     *  The date when the subscription term ends, where the subscription ends at midnight the day before. For example, if the SubscriptionEndDate is 12/31/2016, the subscriptions ends at midnight (00:00:00 hours) on 12/30/2016. This date is the same as the term end date or the cancelation date, as appropriate.
     *
     * @remarks
     * **Character limit**: 29 **Values**: automatically generated
     */
    subscriptionEndDate?: Date;
    /**
     *  The date when the subscription term starts. This date is the same as the start date of the original term, which isn't necessarily the start date of the current or new term.
     *
     * @remarks
     * **Character limit**: 29 **Values**: automatically generated
     */
    subscriptionStartDate?: Date;
    /**
     * Date when the subscription was synchronized with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).
     *
     * @remarks
     *
     */
    syncDateNS?: string;
    /**
     *  This field can be updated when **Status** is `Draft`. The date when the subscription term ends. If the subscription is evergreen, the TermEndDate value is null or is the cancelation date, as appropriate. **Character limit**: 29 **Values**: automatically generated
     */
    termEndDate?: Date;
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
     *  The ID of the user who last updated the subscription.
     *
     * @remarks
     * **Character limit:** 32 **Values: **automatically generated
     */
    updatedById?: string;
    /**
     *  The date when the subscription was last updated.
     *
     * @remarks
     * **Character limit:** 29 **Values**: automatically generated
     */
    updatedDate?: Date;
    /**
     *  The version number of the subscription.
     *
     * @remarks
     * **Values**: automatically generated
     */
    version?: number;
}
