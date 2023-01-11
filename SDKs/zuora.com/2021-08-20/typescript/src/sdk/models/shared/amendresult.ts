import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChargeMetricsData } from "./chargemetricsdata";
import { ActionAmendCreditMemoData } from "./actionamendcreditmemodata";
import { ActionsErrorResponse } from "./actionserrorresponse";
import { ActionAmendInvoiceData } from "./actionamendinvoicedata";



export class AmendResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AmendmentIds" })
  amendmentIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=ChargeMetricsData" })
  chargeMetricsData?: ChargeMetricsData;

  @SpeakeasyMetadata({ data: "json, name=CreditMemoDatas", elemType: ActionAmendCreditMemoData })
  creditMemoDatas?: ActionAmendCreditMemoData[];

  @SpeakeasyMetadata({ data: "json, name=CreditMemoId" })
  creditMemoId?: string;

  @SpeakeasyMetadata({ data: "json, name=Errors", elemType: ActionsErrorResponse })
  errors?: ActionsErrorResponse[];

  @SpeakeasyMetadata({ data: "json, name=GatewayResponse" })
  gatewayResponse?: string;

  @SpeakeasyMetadata({ data: "json, name=GatewayResponseCode" })
  gatewayResponseCode?: string;

  @SpeakeasyMetadata({ data: "json, name=InvoiceDatas", elemType: ActionAmendInvoiceData })
  invoiceDatas?: ActionAmendInvoiceData[];

  @SpeakeasyMetadata({ data: "json, name=InvoiceId" })
  invoiceId?: string;

  @SpeakeasyMetadata({ data: "json, name=PaymentId" })
  paymentId?: string;

  @SpeakeasyMetadata({ data: "json, name=PaymentTransactionNumber" })
  paymentTransactionNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=SubscriptionId" })
  subscriptionId?: string;

  @SpeakeasyMetadata({ data: "json, name=Success" })
  success?: boolean;

  @SpeakeasyMetadata({ data: "json, name=TotalDeltaMrr" })
  totalDeltaMrr?: number;

  @SpeakeasyMetadata({ data: "json, name=TotalDeltaTcv" })
  totalDeltaTcv?: number;
}
