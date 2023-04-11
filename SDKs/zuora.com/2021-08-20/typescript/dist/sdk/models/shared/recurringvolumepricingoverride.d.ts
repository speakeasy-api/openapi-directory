import { SpeakeasyBase } from "../../../internal/utils";
import { ChargeTier } from "./chargetier";
/**
 * Specifies the duration of each recurring period.
 *
 * @remarks
 *
 */
export declare enum RecurringVolumePricingOverrideListPriceBaseEnum {
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
export declare enum RecurringVolumePricingOverridePriceChangeOptionEnum {
    NoChange = "NoChange",
    SpecificPercentageValue = "SpecificPercentageValue",
    UseLatestProductCatalogPricing = "UseLatestProductCatalogPricing"
}
/**
 * Pricing information about a recurring charge that uses the "volume pricing" charge model. In this charge model, the charge has a variable price per unit, depending on how many units are purchased.
 *
 * @remarks
 *
 */
export declare class RecurringVolumePricingOverride extends SpeakeasyBase {
    /**
     * Specifies the duration of each recurring period.
     *
     * @remarks
     *
     */
    listPriceBase?: RecurringVolumePricingOverrideListPriceBaseEnum;
    /**
     * Specifies how Zuora changes the price of the charge each time the subscription renews.
     *
     * @remarks
     *
     * If the value of this field is `SpecificPercentageValue`, use the `priceIncreasePercentage` field to specify how much the price of the charge should change.
     *
     */
    priceChangeOption?: RecurringVolumePricingOverridePriceChangeOptionEnum;
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
     * List of variable pricing tiers in the charge.
     *
     * @remarks
     *
     */
    tiers?: ChargeTier[];
}
