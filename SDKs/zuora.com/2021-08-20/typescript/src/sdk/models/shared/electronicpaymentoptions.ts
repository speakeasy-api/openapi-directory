import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ElectronicPaymentOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PaymentMethodId" })
  paymentMethodId?: string;
}
