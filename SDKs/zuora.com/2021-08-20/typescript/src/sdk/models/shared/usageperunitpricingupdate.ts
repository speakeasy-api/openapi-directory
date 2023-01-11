import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum UsagePerUnitPricingUpdatePriceChangeOptionEnum {
    NoChange = "NoChange",
    SpecificPercentageValue = "SpecificPercentageValue",
    UseLatestProductCatalogPricing = "UseLatestProductCatalogPricing"
}


export class UsagePerUnitPricingUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=listPrice" })
  listPrice?: number;

  @SpeakeasyMetadata({ data: "json, name=priceChangeOption" })
  priceChangeOption?: UsagePerUnitPricingUpdatePriceChangeOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=priceIncreasePercentage" })
  priceIncreasePercentage?: number;
}
