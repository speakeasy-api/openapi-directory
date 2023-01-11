import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChargeTier } from "./chargetier";


export enum RecurringVolumePricingOverrideListPriceBaseEnum {
    PerBillingPeriod = "Per_Billing_Period",
    PerMonth = "Per_Month",
    PerWeek = "Per_Week"
}

export enum RecurringVolumePricingOverridePriceChangeOptionEnum {
    NoChange = "NoChange",
    SpecificPercentageValue = "SpecificPercentageValue",
    UseLatestProductCatalogPricing = "UseLatestProductCatalogPricing"
}


// RecurringVolumePricingOverride
/** 
 * Pricing information about a recurring charge that uses the "volume pricing" charge model. In this charge model, the charge has a variable price per unit, depending on how many units are purchased.
 * 
**/
export class RecurringVolumePricingOverride extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=listPriceBase" })
  listPriceBase?: RecurringVolumePricingOverrideListPriceBaseEnum;

  @SpeakeasyMetadata({ data: "json, name=priceChangeOption" })
  priceChangeOption?: RecurringVolumePricingOverridePriceChangeOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=priceIncreasePercentage" })
  priceIncreasePercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: number;

  @SpeakeasyMetadata({ data: "json, name=tiers", elemType: ChargeTier })
  tiers?: ChargeTier[];
}
