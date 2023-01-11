import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutVerifyPaymentMethodResponseType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=paymentMethodId" })
  paymentMethodId?: string;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
