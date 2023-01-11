import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostPaymentMethodResponseType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=paymentMethodId" })
  paymentMethodId?: string;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
