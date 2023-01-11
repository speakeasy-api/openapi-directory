import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChargeTier } from "./chargetier";


export enum UsageTieredWithOveragePricingOverrideOverageUnusedUnitsCreditOptionEnum {
    NoCredit = "NoCredit",
    CreditBySpecificRate = "CreditBySpecificRate"
}

export enum UsageTieredWithOveragePricingOverridePriceChangeOptionEnum {
    NoChange = "NoChange",
    SpecificPercentageValue = "SpecificPercentageValue",
    UseLatestProductCatalogPricing = "UseLatestProductCatalogPricing"
}


// UsageTieredWithOveragePricingOverride
/** 
 * Pricing information about a usage charge that uses the "tiered with overage" charge model. In this charge model, the charge has cumulative pricing tiers that become effective as units are consumed. The charge also has a fixed price per unit consumed beyond the limit of the final tier.
 * 
**/
export class UsageTieredWithOveragePricingOverride extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=numberOfPeriods" })
  numberOfPeriods?: number;

  @SpeakeasyMetadata({ data: "json, name=overagePrice" })
  overagePrice?: number;

  @SpeakeasyMetadata({ data: "json, name=overageUnusedUnitsCreditOption" })
  overageUnusedUnitsCreditOption?: UsageTieredWithOveragePricingOverrideOverageUnusedUnitsCreditOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=priceChangeOption" })
  priceChangeOption?: UsageTieredWithOveragePricingOverridePriceChangeOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=priceIncreasePercentage" })
  priceIncreasePercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=tiers", elemType: ChargeTier })
  tiers?: ChargeTier[];

  @SpeakeasyMetadata({ data: "json, name=unusedUnitsCreditRates" })
  unusedUnitsCreditRates?: number;
}
