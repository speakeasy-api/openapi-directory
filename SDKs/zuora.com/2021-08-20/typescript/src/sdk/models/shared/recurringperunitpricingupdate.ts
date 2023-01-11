import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum RecurringPerUnitPricingUpdatePriceChangeOptionEnum {
    NoChange = "NoChange",
    SpecificPercentageValue = "SpecificPercentageValue",
    UseLatestProductCatalogPricing = "UseLatestProductCatalogPricing"
}


export class RecurringPerUnitPricingUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=listPrice" })
  listPrice?: number;

  @SpeakeasyMetadata({ data: "json, name=priceChangeOption" })
  priceChangeOption?: RecurringPerUnitPricingUpdatePriceChangeOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=priceIncreasePercentage" })
  priceIncreasePercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: number;
}
