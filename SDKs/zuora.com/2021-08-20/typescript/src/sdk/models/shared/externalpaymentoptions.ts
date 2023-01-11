import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ExternalPaymentOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=EffectiveDate" })
  effectiveDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=GatewayOrderId" })
  gatewayOrderId?: string;

  @SpeakeasyMetadata({ data: "json, name=PaymentMethodId" })
  paymentMethodId?: string;

  @SpeakeasyMetadata({ data: "json, name=ReferenceId" })
  referenceId?: string;
}
