import { SpeakeasyBase } from "../../../internal/utils";
import { ChargeTier } from "./chargetier";
/**
 * Specifies whether to credit the customer for unused units.
 *
 * @remarks
 *
 * If the value of this field is `CreditBySpecificRate`, use the `unusedUnitsCreditRates` field to specify the rate at which to credit the customer for unused units.
 *
 */
export declare enum UsageTieredWithOveragePricingOverrideOverageUnusedUnitsCreditOptionEnum {
    NoCredit = "NoCredit",
    CreditBySpecificRate = "CreditBySpecificRate"
}
/**
 * Specifies how Zuora changes the price of the charge each time the subscription renews.
 *
 * @remarks
 *
 * If the value of this field is `SpecificPercentageValue`, use the `priceIncreasePercentage` field to specify how much the price of the charge should change.
 *
 */
export declare enum UsageTieredWithOveragePricingOverridePriceChangeOptionEnum {
    NoChange = "NoChange",
    SpecificPercentageValue = "SpecificPercentageValue",
    UseLatestProductCatalogPricing = "UseLatestProductCatalogPricing"
}
/**
 * Pricing information about a usage charge that uses the "tiered with overage" charge model. In this charge model, the charge has cumulative pricing tiers that become effective as units are consumed. The charge also has a fixed price per unit consumed beyond the limit of the final tier.
 *
 * @remarks
 *
 */
export declare class UsageTieredWithOveragePricingOverride extends SpeakeasyBase {
    /**
     * Number of periods that Zuora considers when calculating overage charges with overage smoothing.
     *
     * @remarks
     *
     */
    numberOfPeriods?: number;
    /**
     * Price per overage unit consumed.
     *
     * @remarks
     *
     */
    overagePrice?: number;
    /**
     * Specifies whether to credit the customer for unused units.
     *
     * @remarks
     *
     * If the value of this field is `CreditBySpecificRate`, use the `unusedUnitsCreditRates` field to specify the rate at which to credit the customer for unused units.
     *
     */
    overageUnusedUnitsCreditOption?: UsageTieredWithOveragePricingOverrideOverageUnusedUnitsCreditOptionEnum;
    /**
     * Specifies how Zuora changes the price of the charge each time the subscription renews.
     *
     * @remarks
     *
     * If the value of this field is `SpecificPercentageValue`, use the `priceIncreasePercentage` field to specify how much the price of the charge should change.
     *
     */
    priceChangeOption?: UsageTieredWithOveragePricingOverridePriceChangeOptionEnum;
    /**
     * Specifies the percentage by which the price of the charge should change each time the subscription renews. Only applicable if the value of the `priceChangeOption` field is `SpecificPercentageValue`.
     *
     * @remarks
     *
     */
    priceIncreasePercentage?: number;
    /**
     * List of cumulative pricing tiers in the charge.
     *
     * @remarks
     *
     */
    tiers?: ChargeTier[];
    /**
     * Per-unit rate at which to credit the customer for unused units. Only applicable if the value of the `overageUnusedUnitsCreditOption` field is `CreditBySpecificRate`.
     *
     * @remarks
     *
     */
    unusedUnitsCreditRates?: number;
}
