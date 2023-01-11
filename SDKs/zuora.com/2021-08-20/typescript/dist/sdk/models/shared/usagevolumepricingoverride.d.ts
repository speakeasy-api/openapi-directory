import { SpeakeasyBase } from "../../../internal/utils";
import { ChargeTier } from "./chargetier";
export declare enum UsageVolumePricingOverridePriceChangeOptionEnum {
    NoChange = "NoChange",
    SpecificPercentageValue = "SpecificPercentageValue",
    UseLatestProductCatalogPricing = "UseLatestProductCatalogPricing"
}
export declare enum UsageVolumePricingOverrideRatingGroupEnum {
    ByBillingPeriod = "ByBillingPeriod",
    ByUsageStartDate = "ByUsageStartDate",
    ByUsageRecord = "ByUsageRecord",
    ByUsageUpload = "ByUsageUpload"
}
/**
 * Pricing information about a usage charge that uses the "volume pricing" charge model. In this charge model, the charge has a variable price per unit, depending on how many units are consumed.
 *
**/
export declare class UsageVolumePricingOverride extends SpeakeasyBase {
    priceChangeOption?: UsageVolumePricingOverridePriceChangeOptionEnum;
    priceIncreasePercentage?: number;
    ratingGroup?: UsageVolumePricingOverrideRatingGroupEnum;
    tiers?: ChargeTier[];
}
