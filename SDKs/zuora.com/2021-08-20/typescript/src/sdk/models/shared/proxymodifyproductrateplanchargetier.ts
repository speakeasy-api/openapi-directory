import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProxyModifyProductRatePlanChargeTier extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Price" })
  price?: number;
}
