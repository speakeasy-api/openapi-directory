import { SpeakeasyBase } from "../../../internal/utils";
export declare enum UsagePerUnitPricingOverridePriceChangeOptionEnum {
    NoChange = "NoChange",
    SpecificPercentageValue = "SpecificPercentageValue",
    UseLatestProductCatalogPricing = "UseLatestProductCatalogPricing"
}
export declare enum UsagePerUnitPricingOverrideRatingGroupEnum {
    ByBillingPeriod = "ByBillingPeriod",
    ByUsageStartDate = "ByUsageStartDate",
    ByUsageRecord = "ByUsageRecord",
    ByUsageUpload = "ByUsageUpload"
}
/**
 * Pricing information about a usage charge that uses the "per unit" charge model. In this charge model, the charge has a fixed price per unit consumed.
 *
**/
export declare class UsagePerUnitPricingOverride extends SpeakeasyBase {
    listPrice?: number;
    priceChangeOption?: UsagePerUnitPricingOverridePriceChangeOptionEnum;
    priceIncreasePercentage?: number;
    ratingGroup?: UsagePerUnitPricingOverrideRatingGroupEnum;
}
