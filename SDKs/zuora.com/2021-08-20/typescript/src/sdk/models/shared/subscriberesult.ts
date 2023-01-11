import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NewChargeMetrics } from "./newchargemetrics";
import { ActionSubscribeCreditMemoData } from "./actionsubscribecreditmemodata";
import { ActionsErrorResponse } from "./actionserrorresponse";
import { ActionSubscribeInvoiceData } from "./actionsubscribeinvoicedata";



export class SubscribeResultChargeMetricsData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChargeMetrics", elemType: NewChargeMetrics })
  chargeMetrics?: NewChargeMetrics[];
}


export class SubscribeResultCreditMemoResultCreditMemo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreditMemoNumber" })
  creditMemoNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;
}


// SubscribeResultCreditMemoResult
/** 
 * The result of the credit memo.
 * 
 * **Note**: This field is only available if you have the Invoice Settlement feature enabled and set the `X-Zuora-WSDL-Version` request header to `107` or later.
 * 
**/
export class SubscribeResultCreditMemoResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreditMemo", elemType: SubscribeResultCreditMemoResultCreditMemo })
  creditMemo?: SubscribeResultCreditMemoResultCreditMemo[];
}


export class SubscribeResultInvoiceResultInvoice extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=InvoiceNumber" })
  invoiceNumber?: string;
}


export class SubscribeResultInvoiceResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Invoice", elemType: SubscribeResultInvoiceResultInvoice })
  invoice?: SubscribeResultInvoiceResultInvoice[];
}


export class SubscribeResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=AccountNumber" })
  accountNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=ChargeMetricsData" })
  chargeMetricsData?: SubscribeResultChargeMetricsData;

  @SpeakeasyMetadata({ data: "json, name=CreditMemoData", elemType: ActionSubscribeCreditMemoData })
  creditMemoData?: ActionSubscribeCreditMemoData[];

  @SpeakeasyMetadata({ data: "json, name=CreditMemoId" })
  creditMemoId?: string;

  @SpeakeasyMetadata({ data: "json, name=CreditMemoNumber" })
  creditMemoNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=CreditMemoResult" })
  creditMemoResult?: SubscribeResultCreditMemoResult;

  @SpeakeasyMetadata({ data: "json, name=Errors", elemType: ActionsErrorResponse })
  errors?: ActionsErrorResponse[];

  @SpeakeasyMetadata({ data: "json, name=GatewayResponse" })
  gatewayResponse?: string;

  @SpeakeasyMetadata({ data: "json, name=GatewayResponseCode" })
  gatewayResponseCode?: string;

  @SpeakeasyMetadata({ data: "json, name=InvoiceData", elemType: ActionSubscribeInvoiceData })
  invoiceData?: ActionSubscribeInvoiceData[];

  @SpeakeasyMetadata({ data: "json, name=InvoiceId" })
  invoiceId?: string;

  @SpeakeasyMetadata({ data: "json, name=InvoiceNumber" })
  invoiceNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=InvoiceResult" })
  invoiceResult?: SubscribeResultInvoiceResult;

  @SpeakeasyMetadata({ data: "json, name=PaymentId" })
  paymentId?: string;

  @SpeakeasyMetadata({ data: "json, name=PaymentTransactionNumber" })
  paymentTransactionNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=SubscriptionId" })
  subscriptionId?: string;

  @SpeakeasyMetadata({ data: "json, name=SubscriptionNumber" })
  subscriptionNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=Success" })
  success?: boolean;

  @SpeakeasyMetadata({ data: "json, name=TotalMrr" })
  totalMrr?: number;

  @SpeakeasyMetadata({ data: "json, name=TotalTcv" })
  totalTcv?: number;
}
