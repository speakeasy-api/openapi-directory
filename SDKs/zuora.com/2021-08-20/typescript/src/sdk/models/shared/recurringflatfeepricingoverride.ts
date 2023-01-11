import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum RecurringFlatFeePricingOverrideListPriceBaseEnum {
    PerBillingPeriod = "Per_Billing_Period",
    PerMonth = "Per_Month",
    PerWeek = "Per_Week"
}

export enum RecurringFlatFeePricingOverridePriceChangeOptionEnum {
    NoChange = "NoChange",
    SpecificPercentageValue = "SpecificPercentageValue",
    UseLatestProductCatalogPricing = "UseLatestProductCatalogPricing"
}


// RecurringFlatFeePricingOverride
/** 
 * Pricing information about a recurring charge that uses the "flat fee" charge model. In this charge model, the charge has a fixed price.
 * 
**/
export class RecurringFlatFeePricingOverride extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=listPrice" })
  listPrice?: number;

  @SpeakeasyMetadata({ data: "json, name=listPriceBase" })
  listPriceBase?: RecurringFlatFeePricingOverrideListPriceBaseEnum;

  @SpeakeasyMetadata({ data: "json, name=priceChangeOption" })
  priceChangeOption?: RecurringFlatFeePricingOverridePriceChangeOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=priceIncreasePercentage" })
  priceIncreasePercentage?: number;
}
