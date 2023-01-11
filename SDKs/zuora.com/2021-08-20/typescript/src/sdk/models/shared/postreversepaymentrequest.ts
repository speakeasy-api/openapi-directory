import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostReversePaymentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount: number;

  @SpeakeasyMetadata({ data: "json, name=gatewayResponse" })
  gatewayResponse?: string;

  @SpeakeasyMetadata({ data: "json, name=gatewayResponseCode" })
  gatewayResponseCode?: string;

  @SpeakeasyMetadata({ data: "json, name=referenceId" })
  referenceId?: string;

  @SpeakeasyMetadata({ data: "json, name=secondReferenceId" })
  secondReferenceId?: string;

  @SpeakeasyMetadata({ data: "json, name=settledOn" })
  settledOn?: Date;
}
