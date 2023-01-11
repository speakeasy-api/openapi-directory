import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum UsageOveragePricingOverrideOverageUnusedUnitsCreditOptionEnum {
    NoCredit = "NoCredit",
    CreditBySpecificRate = "CreditBySpecificRate"
}

export enum UsageOveragePricingOverridePriceChangeOptionEnum {
    NoChange = "NoChange",
    SpecificPercentageValue = "SpecificPercentageValue",
    UseLatestProductCatalogPricing = "UseLatestProductCatalogPricing"
}


// UsageOveragePricingOverride
/** 
 * Pricing information about a usage charge that uses the "overage" charge model. In this charge model, the charge has an allowance of free units and a fixed price per additional unit consumed.
 * 
**/
export class UsageOveragePricingOverride extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=includedUnits" })
  includedUnits?: number;

  @SpeakeasyMetadata({ data: "json, name=numberOfPeriods" })
  numberOfPeriods?: number;

  @SpeakeasyMetadata({ data: "json, name=overagePrice" })
  overagePrice?: number;

  @SpeakeasyMetadata({ data: "json, name=overageUnusedUnitsCreditOption" })
  overageUnusedUnitsCreditOption?: UsageOveragePricingOverrideOverageUnusedUnitsCreditOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=priceChangeOption" })
  priceChangeOption?: UsageOveragePricingOverridePriceChangeOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=priceIncreasePercentage" })
  priceIncreasePercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=unusedUnitsCreditRates" })
  unusedUnitsCreditRates?: number;
}
