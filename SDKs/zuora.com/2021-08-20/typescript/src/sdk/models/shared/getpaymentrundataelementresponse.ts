import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GetPaymentRunDataTransactionElementResponse } from "./getpaymentrundatatransactionelementresponse";


export enum GetPaymentRunDataElementResponseDocumentTypeEnum {
    Invoice = "Invoice",
    DebitMemo = "DebitMemo"
}

export enum GetPaymentRunDataElementResponseResultEnum {
    Processed = "Processed",
    Error = "Error"
}


export class GetPaymentRunDataElementResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=amountCollected" })
  amountCollected?: number;

  @SpeakeasyMetadata({ data: "json, name=amountToCollect" })
  amountToCollect?: number;

  @SpeakeasyMetadata({ data: "json, name=comment" })
  comment?: string;

  @SpeakeasyMetadata({ data: "json, name=documentId" })
  documentId?: string;

  @SpeakeasyMetadata({ data: "json, name=documentType" })
  documentType?: GetPaymentRunDataElementResponseDocumentTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=errorCode" })
  errorCode?: string;

  @SpeakeasyMetadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=paymentGatewayId" })
  paymentGatewayId?: string;

  @SpeakeasyMetadata({ data: "json, name=paymentMethodId" })
  paymentMethodId?: string;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: GetPaymentRunDataElementResponseResultEnum;

  @SpeakeasyMetadata({ data: "json, name=transactions", elemType: GetPaymentRunDataTransactionElementResponse })
  transactions?: GetPaymentRunDataTransactionElementResponse[];
}
