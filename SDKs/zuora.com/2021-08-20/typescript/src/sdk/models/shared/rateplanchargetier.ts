import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum RatePlanChargeTierPriceFormatEnum {
    FlatFee = "FlatFee",
    PerUnit = "PerUnit"
}


export class RatePlanChargeTier extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreatedById" })
  createdById?: string;

  @SpeakeasyMetadata({ data: "json, name=CreatedDate" })
  createdDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=EndingUnit" })
  endingUnit?: number;

  @SpeakeasyMetadata({ data: "json, name=IsOveragePrice" })
  isOveragePrice?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Price" })
  price?: number;

  @SpeakeasyMetadata({ data: "json, name=PriceFormat" })
  priceFormat?: RatePlanChargeTierPriceFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=RatePlanChargeId" })
  ratePlanChargeId: string;

  @SpeakeasyMetadata({ data: "json, name=StartingUnit" })
  startingUnit?: number;

  @SpeakeasyMetadata({ data: "json, name=Tier" })
  tier?: number;

  @SpeakeasyMetadata({ data: "json, name=UpdatedById" })
  updatedById?: string;

  @SpeakeasyMetadata({ data: "json, name=UpdatedDate" })
  updatedDate?: Date;
}
