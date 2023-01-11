import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChargeTier } from "./chargetier";


export enum UsageTieredPricingOverridePriceChangeOptionEnum {
    NoChange = "NoChange",
    SpecificPercentageValue = "SpecificPercentageValue",
    UseLatestProductCatalogPricing = "UseLatestProductCatalogPricing"
}

export enum UsageTieredPricingOverrideRatingGroupEnum {
    ByBillingPeriod = "ByBillingPeriod",
    ByUsageStartDate = "ByUsageStartDate",
    ByUsageRecord = "ByUsageRecord",
    ByUsageUpload = "ByUsageUpload"
}


// UsageTieredPricingOverride
/** 
 * Pricing information about a usage charge that uses the "tiered pricing" charge model. In this charge model, the charge has cumulative pricing tiers that become effective as units are consumed.
 * 
**/
export class UsageTieredPricingOverride extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=priceChangeOption" })
  priceChangeOption?: UsageTieredPricingOverridePriceChangeOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=priceIncreasePercentage" })
  priceIncreasePercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=ratingGroup" })
  ratingGroup?: UsageTieredPricingOverrideRatingGroupEnum;

  @SpeakeasyMetadata({ data: "json, name=tiers", elemType: ChargeTier })
  tiers?: ChargeTier[];
}
