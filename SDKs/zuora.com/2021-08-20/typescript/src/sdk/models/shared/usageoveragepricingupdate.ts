import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum UsageOveragePricingUpdatePriceChangeOptionEnum {
    NoChange = "NoChange",
    SpecificPercentageValue = "SpecificPercentageValue",
    UseLatestProductCatalogPricing = "UseLatestProductCatalogPricing"
}


export class UsageOveragePricingUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=includedUnits" })
  includedUnits?: number;

  @SpeakeasyMetadata({ data: "json, name=overagePrice" })
  overagePrice?: number;

  @SpeakeasyMetadata({ data: "json, name=priceChangeOption" })
  priceChangeOption?: UsageOveragePricingUpdatePriceChangeOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=priceIncreasePercentage" })
  priceIncreasePercentage?: number;
}
