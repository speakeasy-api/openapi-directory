import { SpeakeasyBase } from "../../../internal/utils";
import { GETAccountSummarySubscriptionRatePlanType } from "./getaccountsummarysubscriptionrateplantype";
/**
 * Container for custom fields of a Subscription object.
 *
 * @remarks
 *
 */
export declare class GETAccountSummarySubscriptionType extends SpeakeasyBase {
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
     * If `true`, auto-renew is enabled. If `false`, auto-renew is disabled.
     *
     * @remarks
     *
     */
    autoRenew?: boolean;
    /**
     * Subscription ID.
     *
     * @remarks
     *
     */
    id?: string;
    /**
     * Duration of the initial subscription term in whole months.
     *
     * @remarks
     *
     */
    initialTerm?: string;
    /**
     * Container for rate plans for this subscription.
     *
     * @remarks
     *
     */
    ratePlans?: GETAccountSummarySubscriptionRatePlanType[];
    /**
     * Duration of the renewal term in whole months.
     *
     * @remarks
     *
     */
    renewalTerm?: string;
    /**
     * Subscription status; possible values are: `Draft`, `PendingActivation`, `PendingAcceptance`, `Active`, `Cancelled`, `Expired`.
     *
     * @remarks
     *
     */
    status?: string;
    /**
     * Subscription Number.
     *
     * @remarks
     *
     */
    subscriptionNumber?: string;
    /**
     * Subscription start date.
     *
     * @remarks
     *
     */
    subscriptionStartDate?: Date;
    /**
     * End date of the subscription term. If the subscription is evergreen, this is either null or equal to the cancellation date, as appropriate.
     *
     * @remarks
     *
     */
    termEndDate?: Date;
    /**
     * Start date of the subscription term. If this is a renewal subscription, this date is different than the subscription start date.
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
}
