import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostPaymentRunDataElementRequestDocumentTypeEnum {
    Invoice = "Invoice",
    DebitMemo = "DebitMemo"
}


export class PostPaymentRunDataElementRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId: string;

  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=comment" })
  comment?: string;

  @SpeakeasyMetadata({ data: "json, name=documentId" })
  documentId?: string;

  @SpeakeasyMetadata({ data: "json, name=documentType" })
  documentType?: PostPaymentRunDataElementRequestDocumentTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=paymentGatewayId" })
  paymentGatewayId?: string;

  @SpeakeasyMetadata({ data: "json, name=paymentMethodId" })
  paymentMethodId?: string;
}
