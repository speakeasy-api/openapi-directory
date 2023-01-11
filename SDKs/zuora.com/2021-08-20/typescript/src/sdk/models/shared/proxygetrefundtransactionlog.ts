import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProxyGetRefundTransactionLog extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BatchId" })
  batchId?: string;

  @SpeakeasyMetadata({ data: "json, name=Gateway" })
  gateway?: string;

  @SpeakeasyMetadata({ data: "json, name=GatewayReasonCode" })
  gatewayReasonCode?: string;

  @SpeakeasyMetadata({ data: "json, name=GatewayReasonCodeDescription" })
  gatewayReasonCodeDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=GatewayState" })
  gatewayState?: string;

  @SpeakeasyMetadata({ data: "json, name=GatewayTransactionType" })
  gatewayTransactionType?: string;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=RefundId" })
  refundId?: string;

  @SpeakeasyMetadata({ data: "json, name=RequestString" })
  requestString?: string;

  @SpeakeasyMetadata({ data: "json, name=ResponseString" })
  responseString?: string;

  @SpeakeasyMetadata({ data: "json, name=TransactionDate" })
  transactionDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=TransactionId" })
  transactionId?: string;
}
