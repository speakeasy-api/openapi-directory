import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChargeTier } from "./chargetier";


export enum RecurringTieredPricingOverrideListPriceBaseEnum {
    PerBillingPeriod = "Per_Billing_Period",
    PerMonth = "Per_Month",
    PerWeek = "Per_Week"
}

export enum RecurringTieredPricingOverridePriceChangeOptionEnum {
    NoChange = "NoChange",
    SpecificPercentageValue = "SpecificPercentageValue",
    UseLatestProductCatalogPricing = "UseLatestProductCatalogPricing"
}


// RecurringTieredPricingOverride
/** 
 * Pricing information about a recurring charge that uses the "tiered pricing" charge model. In this charge model, the charge has cumulative pricing tiers that become effective as units are purchased.
 * 
**/
export class RecurringTieredPricingOverride extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=listPriceBase" })
  listPriceBase?: RecurringTieredPricingOverrideListPriceBaseEnum;

  @SpeakeasyMetadata({ data: "json, name=priceChangeOption" })
  priceChangeOption?: RecurringTieredPricingOverridePriceChangeOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=priceIncreasePercentage" })
  priceIncreasePercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: number;

  @SpeakeasyMetadata({ data: "json, name=tiers", elemType: ChargeTier })
  tiers?: ChargeTier[];
}
