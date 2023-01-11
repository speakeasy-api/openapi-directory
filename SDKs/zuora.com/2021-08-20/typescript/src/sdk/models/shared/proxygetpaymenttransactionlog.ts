import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ProxyGetPaymentTransactionLogGatewayStateEnum {
    MarkedForSubmission = "MarkedForSubmission",
    Submitted = "Submitted",
    Settled = "Settled",
    NotSubmitted = "NotSubmitted",
    FailedToSettle = "FailedToSettle"
}

export enum ProxyGetPaymentTransactionLogGatewayTransactionTypeEnum {
    Authorization = "Authorization",
    Sale = "Sale",
    Void = "Void",
    Inquiry = "Inquiry",
    VoidAuth = "VoidAuth"
}


export class ProxyGetPaymentTransactionLog extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AVSResponseCode" })
  avsResponseCode?: string;

  @SpeakeasyMetadata({ data: "json, name=BatchId" })
  batchId?: string;

  @SpeakeasyMetadata({ data: "json, name=CVVResponseCode" })
  cvvResponseCode?: string;

  @SpeakeasyMetadata({ data: "json, name=Gateway" })
  gateway?: string;

  @SpeakeasyMetadata({ data: "json, name=GatewayReasonCode" })
  gatewayReasonCode?: string;

  @SpeakeasyMetadata({ data: "json, name=GatewayReasonCodeDescription" })
  gatewayReasonCodeDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=GatewayState" })
  gatewayState?: ProxyGetPaymentTransactionLogGatewayStateEnum;

  @SpeakeasyMetadata({ data: "json, name=GatewayTransactionType" })
  gatewayTransactionType?: ProxyGetPaymentTransactionLogGatewayTransactionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=PaymentId" })
  paymentId?: string;

  @SpeakeasyMetadata({ data: "json, name=RequestString" })
  requestString?: string;

  @SpeakeasyMetadata({ data: "json, name=ResponseString" })
  responseString?: string;

  @SpeakeasyMetadata({ data: "json, name=TransactionDate" })
  transactionDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=TransactionId" })
  transactionId?: string;
}
