import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The fields populated for a quote when a quote is sent to Zuora Billing from Zuora Quote.
 *
 * @remarks
 *
 */
export declare class QuoteObjectFields extends SpeakeasyBase {
    /**
     * The closing date of the Opportunity.
     *
     * @remarks
     *
     * This field is used in Zuora Reporting Data Sources to report on Subscription metrics.
     *
     * If the subscription was originated from Zuora Quotes, the value is populated with the value from Zuora Quotes.
     *
     */
    opportunityCloseDateQT?: string;
    /**
     * The unique identifier of the Opportunity.
     *
     * @remarks
     *
     * This field is used in the Zuora Reporting Data Sources to report on Subscription metrics.
     *
     * If the subscription was originated from Zuora Quotes, the value is populated with the value from Zuora Quotes.
     *
     * **Character limit**: 100
     *
     */
    opportunityNameQT?: string;
    /**
     * The specific identifier for the type of business transaction the Quote represents such as New, Upsell, Downsell, Renewal or Churn.
     *
     * @remarks
     *
     * This field is used in the Zuora Reporting Data Sources to report on Subscription metrics.
     *
     * If the subscription was originated from Zuora Quotes, the value is populated with the value from Zuora Quotes.
     *
     * **Character limit**: 32
     *
     */
    quoteBusinessTypeQT?: string;
    /**
     * The unique identifier of the Quote.
     *
     * @remarks
     *
     * This field is used in the Zuora Reporting Data Sources to report on Subscription metrics.
     *
     * If the subscription was originated from Zuora Quotes, the value is populated with the value from Zuora Quotes.
     *
     * **Character limit**: 32
     *
     */
    quoteNumberQT?: string;
    /**
     * The Quote type that represents the subscription lifecycle stage such as New, Amendment, Renew or Cancel.
     *
     * @remarks
     *
     * This field is used in the Zuora Reporting Data Sources to report on Subscription metrics.
     *
     * If the subscription was originated from Zuora Quotes, the value is populated with the value from Zuora Quotes.
     *
     * **Character limit**: 32
     *
     */
    quoteTypeQT?: string;
}
