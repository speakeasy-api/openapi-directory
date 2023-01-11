import { SpeakeasyBase } from "../../../internal/utils";
import { ChargeTier } from "./chargetier";
export declare enum UsageTieredPricingOverridePriceChangeOptionEnum {
    NoChange = "NoChange",
    SpecificPercentageValue = "SpecificPercentageValue",
    UseLatestProductCatalogPricing = "UseLatestProductCatalogPricing"
}
export declare enum UsageTieredPricingOverrideRatingGroupEnum {
    ByBillingPeriod = "ByBillingPeriod",
    ByUsageStartDate = "ByUsageStartDate",
    ByUsageRecord = "ByUsageRecord",
    ByUsageUpload = "ByUsageUpload"
}
/**
 * Pricing information about a usage charge that uses the "tiered pricing" charge model. In this charge model, the charge has cumulative pricing tiers that become effective as units are consumed.
 *
**/
export declare class UsageTieredPricingOverride extends SpeakeasyBase {
    priceChangeOption?: UsageTieredPricingOverridePriceChangeOptionEnum;
    priceIncreasePercentage?: number;
    ratingGroup?: UsageTieredPricingOverrideRatingGroupEnum;
    tiers?: ChargeTier[];
}
