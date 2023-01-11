import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum RecurringFlatFeePricingUpdatePriceChangeOptionEnum {
    NoChange = "NoChange",
    SpecificPercentageValue = "SpecificPercentageValue",
    UseLatestProductCatalogPricing = "UseLatestProductCatalogPricing"
}


export class RecurringFlatFeePricingUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=listPrice" })
  listPrice?: number;

  @SpeakeasyMetadata({ data: "json, name=priceChangeOption" })
  priceChangeOption?: RecurringFlatFeePricingUpdatePriceChangeOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=priceIncreasePercentage" })
  priceIncreasePercentage?: number;
}
