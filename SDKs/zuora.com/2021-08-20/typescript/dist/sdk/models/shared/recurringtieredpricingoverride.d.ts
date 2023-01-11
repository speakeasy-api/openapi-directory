import { SpeakeasyBase } from "../../../internal/utils";
import { ChargeTier } from "./chargetier";
export declare enum RecurringTieredPricingOverrideListPriceBaseEnum {
    PerBillingPeriod = "Per_Billing_Period",
    PerMonth = "Per_Month",
    PerWeek = "Per_Week"
}
export declare enum RecurringTieredPricingOverridePriceChangeOptionEnum {
    NoChange = "NoChange",
    SpecificPercentageValue = "SpecificPercentageValue",
    UseLatestProductCatalogPricing = "UseLatestProductCatalogPricing"
}
/**
 * Pricing information about a recurring charge that uses the "tiered pricing" charge model. In this charge model, the charge has cumulative pricing tiers that become effective as units are purchased.
 *
**/
export declare class RecurringTieredPricingOverride extends SpeakeasyBase {
    listPriceBase?: RecurringTieredPricingOverrideListPriceBaseEnum;
    priceChangeOption?: RecurringTieredPricingOverridePriceChangeOptionEnum;
    priceIncreasePercentage?: number;
    quantity?: number;
    tiers?: ChargeTier[];
}
