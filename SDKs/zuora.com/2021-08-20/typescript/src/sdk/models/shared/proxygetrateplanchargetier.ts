import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProxyGetRatePlanChargeTier extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreatedById" })
  createdById?: string;

  @SpeakeasyMetadata({ data: "json, name=CreatedDate" })
  createdDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=EndingUnit" })
  endingUnit?: number;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=Price" })
  price?: number;

  @SpeakeasyMetadata({ data: "json, name=PriceFormat" })
  priceFormat?: string;

  @SpeakeasyMetadata({ data: "json, name=RatePlanChargeId" })
  ratePlanChargeId?: string;

  @SpeakeasyMetadata({ data: "json, name=StartingUnit" })
  startingUnit?: number;

  @SpeakeasyMetadata({ data: "json, name=Tier" })
  tier?: number;

  @SpeakeasyMetadata({ data: "json, name=UpdatedById" })
  updatedById?: string;

  @SpeakeasyMetadata({ data: "json, name=UpdatedDate" })
  updatedDate?: Date;
}
