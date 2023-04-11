import { SpeakeasyBase } from "../../../internal/utils";
import { GETSubscriptionRatePlanType } from "./getsubscriptionrateplantype";
/**
 * Container for custom fields of a Subscription object.
 *
 * @remarks
 *
 */
export declare class GETSubscriptionType extends SpeakeasyBase {
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
    accountId?: string;
    accountName?: string;
    accountNumber?: string;
    /**
     * If `true`, the subscription automatically renews at the end of the term. Default is `false`.
     *
     * @remarks
     *
     */
    autoRenew?: boolean;
    /**
     * Effective contract date for this subscription, as yyyy-mm-dd.
     *
     * @remarks
     *
     */
    contractEffectiveDate?: Date;
    /**
     * Monthly recurring revenue of the subscription.
     *
     * @remarks
     *
     */
    contractedMrr?: number;
    /**
     * The length of the period for the current subscription term.
     *
     * @remarks
     *
     */
    currentTerm?: number;
    /**
     * The period type for the current subscription term.
     *
     * @remarks
     *
     * Values are:
     *
     * * `Month` (default)
     * * `Year`
     * * `Day`
     * * `Week`
     *
     */
    currentTermPeriodType?: string;
    /**
     * The date on which the services or products within a subscription have been accepted by the customer, as yyyy-mm-dd.
     *
     * @remarks
     *
     */
    customerAcceptanceDate?: Date;
    /**
     * Subscription ID.
     *
     * @remarks
     *
     */
    id?: string;
    /**
     * The length of the period for the first subscription term.
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
     * Values are:
     *
     * * `Month` (default)
     * * `Year`
     * * `Day`
     * * `Week`
     *
     */
    initialTermPeriodType?: string;
    invoiceOwnerAccountId?: string;
    invoiceOwnerAccountName?: string;
    invoiceOwnerAccountNumber?: string;
    /**
     * Separates a single subscription from other subscriptions and creates an invoice for the subscription.
     *
     * @remarks
     *
     * If the value is `true`, the subscription is billed separately from other subscriptions. If the value is `false`, the subscription is included with other subscriptions in the account invoice.
     *
     */
    invoiceSeparately?: string;
    /**
     * A string of up to 65,535 characters.
     *
     * @remarks
     *
     */
    notes?: string;
    /**
     * The order number of the order in which the changes on the subscription are made.
     *
     * @remarks
     *
     * **Note:** This field is only available if you have the [Order Metrics](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/AA_Overview_of_Orders#Order_Metrics) feature enabled. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). We will investigate your use cases and data before enabling this feature for you.
     *
     */
    orderNumber?: string;
    /**
     * Container for rate plans.
     *
     * @remarks
     *
     */
    ratePlans?: GETSubscriptionRatePlanType[];
    /**
     * Specifies whether a termed subscription will remain `TERMED` or change to `EVERGREEN` when it is renewed.
     *
     * @remarks
     *
     * Values are:
     *
     * * `RENEW_WITH_SPECIFIC_TERM` (default)
     * * `RENEW_TO_EVERGREEN`
     *
     */
    renewalSetting?: string;
    /**
     * The length of the period for the subscription renewal term.
     *
     * @remarks
     *
     */
    renewalTerm?: number;
    /**
     * The period type for the subscription renewal term.
     *
     * @remarks
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
     * An auto-generated decimal value uniquely tagged with a subscription. The value always contains one decimal place, for example, the revision of a new subscription is 1.0. If a further version of the subscription is created, the revision value will be increased by 1. Also, the revision value is always incremental regardless of deletion of subscription versions.
     *
     * @remarks
     *
     */
    revision?: string;
    /**
     * The date on which the services or products within a subscription have been activated and access has been provided to the customer, as yyyy-mm-dd
     *
     * @remarks
     *
     */
    serviceActivationDate?: Date;
    /**
     * Subscription status; possible values are:
     *
     * @remarks
     *
     * * `Draft`
     * * `Pending Activation`
     * * `Pending Acceptance`
     * * `Active`
     * * `Cancelled`
     * * `Suspended` (This value is in Limited Availability.)
     *
     */
    status?: string;
    /**
     * The date when the subscription term ends, where the subscription ends at midnight the day before.
     *
     * @remarks
     * For example, if the `subscriptionEndDate` is 12/31/2016, the subscriptions ends at midnight (00:00:00 hours) on 12/30/2016.
     * This date is the same as the term end date or the cancelation date, as appropriate.
     *
     */
    subscriptionEndDate?: Date;
    subscriptionNumber?: string;
    /**
     * Date the subscription becomes effective.
     *
     * @remarks
     *
     */
    subscriptionStartDate?: Date;
    /**
     * Date the subscription term ends. If the subscription is evergreen, this is null or is the cancellation date (if one has been set).
     *
     * @remarks
     *
     */
    termEndDate?: Date;
    /**
     * Date the subscription term begins. If this is a renewal subscription, this date is different from the subscription start date.
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
    termType?: string;
    /**
     * Total contracted value of the subscription.
     *
     * @remarks
     *
     */
    totalContractedValue?: number;
}
