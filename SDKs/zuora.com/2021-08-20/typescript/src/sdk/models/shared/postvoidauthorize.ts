import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostVoidAuthorize extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=accountNumber" })
  accountNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=gatewayOrderId" })
  gatewayOrderId: string;

  @SpeakeasyMetadata({ data: "json, name=paymentGatewayId" })
  paymentGatewayId?: string;

  @SpeakeasyMetadata({ data: "json, name=transactionId" })
  transactionId: string;
}
