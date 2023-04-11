import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies whether to credit the customer for unused units.
 *
 * @remarks
 *
 * If the value of this field is `CreditBySpecificRate`, use the `unusedUnitsCreditRates` field to specify the rate at which to credit the customer for unused units.
 *
 */
export declare enum UsageOveragePricingOverrideOverageUnusedUnitsCreditOptionEnum {
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
export declare enum UsageOveragePricingOverridePriceChangeOptionEnum {
    NoChange = "NoChange",
    SpecificPercentageValue = "SpecificPercentageValue",
    UseLatestProductCatalogPricing = "UseLatestProductCatalogPricing"
}
/**
 * Pricing information about a usage charge that uses the "overage" charge model. In this charge model, the charge has an allowance of free units and a fixed price per additional unit consumed.
 *
 * @remarks
 *
 */
export declare class UsageOveragePricingOverride extends SpeakeasyBase {
    /**
     * Number of free units that may be consumed.
     *
     * @remarks
     *
     */
    includedUnits?: number;
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
    overageUnusedUnitsCreditOption?: UsageOveragePricingOverrideOverageUnusedUnitsCreditOptionEnum;
    /**
     * Specifies how Zuora changes the price of the charge each time the subscription renews.
     *
     * @remarks
     *
     * If the value of this field is `SpecificPercentageValue`, use the `priceIncreasePercentage` field to specify how much the price of the charge should change.
     *
     */
    priceChangeOption?: UsageOveragePricingOverridePriceChangeOptionEnum;
    /**
     * Specifies the percentage by which the price of the charge should change each time the subscription renews. Only applicable if the value of the `priceChangeOption` field is `SpecificPercentageValue`.
     *
     * @remarks
     *
     */
    priceIncreasePercentage?: number;
    /**
     * Per-unit rate at which to credit the customer for unused units. Only applicable if the value of the `overageUnusedUnitsCreditOption` field is `CreditBySpecificRate`.
     *
     * @remarks
     *
     */
    unusedUnitsCreditRates?: number;
}
