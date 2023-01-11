import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChargeTier } from "./chargetier";


export enum RecurringTieredPricingUpdatePriceChangeOptionEnum {
    NoChange = "NoChange",
    SpecificPercentageValue = "SpecificPercentageValue",
    UseLatestProductCatalogPricing = "UseLatestProductCatalogPricing"
}


export class RecurringTieredPricingUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=priceChangeOption" })
  priceChangeOption?: RecurringTieredPricingUpdatePriceChangeOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=priceIncreasePercentage" })
  priceIncreasePercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: number;

  @SpeakeasyMetadata({ data: "json, name=tiers", elemType: ChargeTier })
  tiers?: ChargeTier[];
}
