import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostSettlePaymentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=settledOn" })
  settledOn?: Date;
}
