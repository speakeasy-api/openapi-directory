import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum RecurringPerUnitPricingOverrideListPriceBaseEnum {
    PerBillingPeriod = "Per_Billing_Period",
    PerMonth = "Per_Month",
    PerWeek = "Per_Week"
}

export enum RecurringPerUnitPricingOverridePriceChangeOptionEnum {
    NoChange = "NoChange",
    SpecificPercentageValue = "SpecificPercentageValue",
    UseLatestProductCatalogPricing = "UseLatestProductCatalogPricing"
}


// RecurringPerUnitPricingOverride
/** 
 * Pricing information about a recurring charge that uses the "per unit" charge model. In this charge model, the charge has a fixed price per unit purchased.
 * 
**/
export class RecurringPerUnitPricingOverride extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=listPrice" })
  listPrice?: number;

  @SpeakeasyMetadata({ data: "json, name=listPriceBase" })
  listPriceBase?: RecurringPerUnitPricingOverrideListPriceBaseEnum;

  @SpeakeasyMetadata({ data: "json, name=priceChangeOption" })
  priceChangeOption?: RecurringPerUnitPricingOverridePriceChangeOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=priceIncreasePercentage" })
  priceIncreasePercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: number;
}
