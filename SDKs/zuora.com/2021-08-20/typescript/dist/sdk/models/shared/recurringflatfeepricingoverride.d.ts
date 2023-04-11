import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies the duration of each recurring period.
 *
 * @remarks
 *
 */
export declare enum RecurringFlatFeePricingOverrideListPriceBaseEnum {
    PerBillingPeriod = "Per_Billing_Period",
    PerMonth = "Per_Month",
    PerWeek = "Per_Week"
}
/**
 * Specifies how Zuora changes the price of the charge each time the subscription renews.
 *
 * @remarks
 *
 * If the value of this field is `SpecificPercentageValue`, use the `priceIncreasePercentage` field to specify how much the price of the charge should change.
 *
 */
export declare enum RecurringFlatFeePricingOverridePriceChangeOptionEnum {
    NoChange = "NoChange",
    SpecificPercentageValue = "SpecificPercentageValue",
    UseLatestProductCatalogPricing = "UseLatestProductCatalogPricing"
}
/**
 * Pricing information about a recurring charge that uses the "flat fee" charge model. In this charge model, the charge has a fixed price.
 *
 * @remarks
 *
 */
export declare class RecurringFlatFeePricingOverride extends SpeakeasyBase {
    /**
     * Price of the charge in each recurring period.
     *
     * @remarks
     *
     */
    listPrice?: number;
    /**
     * Specifies the duration of each recurring period.
     *
     * @remarks
     *
     */
    listPriceBase?: RecurringFlatFeePricingOverrideListPriceBaseEnum;
    /**
     * Specifies how Zuora changes the price of the charge each time the subscription renews.
     *
     * @remarks
     *
     * If the value of this field is `SpecificPercentageValue`, use the `priceIncreasePercentage` field to specify how much the price of the charge should change.
     *
     */
    priceChangeOption?: RecurringFlatFeePricingOverridePriceChangeOptionEnum;
    /**
     * Specifies the percentage by which the price of the charge should change each time the subscription renews. Only applicable if the value of the `priceChangeOption` field is `SpecificPercentageValue`.
     *
     * @remarks
     *
     */
    priceIncreasePercentage?: number;
}
