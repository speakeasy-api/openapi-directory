import { SpeakeasyBase } from "../../../internal/utils";
import { POSTSrpCreateType } from "./postsrpcreatetype";
/**
 * Container for custom fields of a Subscription object.
 *
 * @remarks
 *
 */
export declare class POSTAccountTypeSubscription extends SpeakeasyBase {
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
     * If `true`, auto-renew is enabled. Default is `false`.
     *
     * @remarks
     *
     */
    autoRenew?: boolean;
    /**
     * Effective contract date for this subscription, as `yyyy-mm-dd`.
     *
     * @remarks
     *
     */
    contractEffectiveDate: Date;
    /**
     * The date on which the services or products within a subscription have been accepted by the customer, as `yyyy-mm-dd`.
     *
     * @remarks
     *
     * Default value is dependent on the value of other fields. See Notes section for more details.
     *
     */
    customerAcceptanceDate?: Date;
    /**
     * Duration of the initial subscription term in whole months.  Default is 0.
     *
     * @remarks
     *
     */
    initialTerm?: number;
    /**
     * Invoice owner account number or ID.
     *
     * @remarks
     *
     * **Note:** This feature is in Limited Availability. If you wish to have access to the feature, submit a request at [Zuora Global Support](https://support.zuora.com).
     *
     */
    invoiceOwnerAccountKey?: string;
    /**
     * Separates a single subscription from other subscriptions and invoices the charge independently.
     *
     * @remarks
     *
     * If the value is `true`, the subscription is billed separately from other subscriptions. If the value is `false`, the subscription is included with other subscriptions in the account invoice.
     * The default value is `false`.
     *
     * Prerequisite: The default subscription setting `Enable Subscriptions to be Invoiced Separately` must be set to `Yes`.
     *
     */
    invoiceSeparately?: boolean;
    notes?: string;
    /**
     * Duration of the renewal term in whole months. Default is 0.
     *
     * @remarks
     *
     */
    renewalTerm?: number;
    /**
     * The date on which the services or products within a subscription have been activated and access has been provided to the customer, as `yyyy-mm-dd`.
     *
     * @remarks
     *
     * Default value is dependent on the value of other fields. See Notes section for more details.
     *
     */
    serviceActivationDate?: Date;
    /**
     * Container for one or more rate plans for this subscription.
     *
     * @remarks
     *
     */
    subscribeToRatePlans?: POSTSrpCreateType[];
    /**
     * Subscription Number. The value can be up to 1000 characters.
     *
     * @remarks
     *
     * If you do not specify a subscription number when creating a subscription for the new account, Zuora will generate a subscription number automatically.
     *
     * If the account is created successfully, the subscription number is returned in the `subscriptionNumber` response field.
     *
     */
    subscriptionNumber?: string;
    /**
     * The date on which the subscription term begins, as `yyyy-mm-dd`. If this is a renewal subscription, this date is different from the subscription start date.
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
