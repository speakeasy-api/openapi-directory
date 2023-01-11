import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RampChargeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=chargeNumber" })
  chargeNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=uniqueToken" })
  uniqueToken?: string;
}
