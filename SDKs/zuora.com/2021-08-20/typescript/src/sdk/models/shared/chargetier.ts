import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ChargeTierPriceFormatEnum {
    FlatFee = "FlatFee",
    PerUnit = "PerUnit"
}


export class ChargeTier extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endingUnit" })
  endingUnit?: number;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price: number;

  @SpeakeasyMetadata({ data: "json, name=priceFormat" })
  priceFormat: ChargeTierPriceFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=startingUnit" })
  startingUnit: number;

  @SpeakeasyMetadata({ data: "json, name=tier" })
  tier: number;
}
