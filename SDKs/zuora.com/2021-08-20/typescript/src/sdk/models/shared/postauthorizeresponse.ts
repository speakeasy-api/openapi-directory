import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostAuthorizeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gatewayOrderId" })
  gatewayOrderId?: string;

  @SpeakeasyMetadata({ data: "json, name=resultCode" })
  resultCode?: string;

  @SpeakeasyMetadata({ data: "json, name=resultMessage" })
  resultMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;

  @SpeakeasyMetadata({ data: "json, name=transactionId" })
  transactionId?: string;
}
