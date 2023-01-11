import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum UsageFlatFeePricingOverridePriceChangeOptionEnum {
    NoChange = "NoChange",
    SpecificPercentageValue = "SpecificPercentageValue",
    UseLatestProductCatalogPricing = "UseLatestProductCatalogPricing"
}


// UsageFlatFeePricingOverride
/** 
 * Pricing information about a usage charge that uses the "flat fee" charge model. In this charge model, the charge has a fixed price.
 * 
**/
export class UsageFlatFeePricingOverride extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=listPrice" })
  listPrice?: number;

  @SpeakeasyMetadata({ data: "json, name=priceChangeOption" })
  priceChangeOption?: UsageFlatFeePricingOverridePriceChangeOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=priceIncreasePercentage" })
  priceIncreasePercentage?: number;
}
