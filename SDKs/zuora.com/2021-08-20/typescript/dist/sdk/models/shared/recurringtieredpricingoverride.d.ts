import { SpeakeasyBase } from "../../../internal/utils";
import { ChargeTier } from "./chargetier";
/**
 * Specifies the duration of each recurring period.
 *
 * @remarks
 *
 */
export declare enum RecurringTieredPricingOverrideListPriceBaseEnum {
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
export declare enum RecurringTieredPricingOverridePriceChangeOptionEnum {
    NoChange = "NoChange",
    SpecificPercentageValue = "SpecificPercentageValue",
    UseLatestProductCatalogPricing = "UseLatestProductCatalogPricing"
}
/**
 * Pricing information about a recurring charge that uses the "tiered pricing" charge model. In this charge model, the charge has cumulative pricing tiers that become effective as units are purchased.
 *
 * @remarks
 *
 */
export declare class RecurringTieredPricingOverride extends SpeakeasyBase {
    /**
     * Specifies the duration of each recurring period.
     *
     * @remarks
     *
     */
    listPriceBase?: RecurringTieredPricingOverrideListPriceBaseEnum;
    /**
     * Specifies how Zuora changes the price of the charge each time the subscription renews.
     *
     * @remarks
     *
     * If the value of this field is `SpecificPercentageValue`, use the `priceIncreasePercentage` field to specify how much the price of the charge should change.
     *
     */
    priceChangeOption?: RecurringTieredPricingOverridePriceChangeOptionEnum;
    /**
     * Specifies the percentage by which the price of the charge should change each time the subscription renews. Only applicable if the value of the `priceChangeOption` field is `SpecificPercentageValue`.
     *
     * @remarks
     *
     */
    priceIncreasePercentage?: number;
    /**
     * Number of units purchased.
     *
     * @remarks
     *
     */
    quantity?: number;
    /**
     * List of cumulative pricing tiers in the charge.
     *
     * @remarks
     *
     */
    tiers?: ChargeTier[];
}
