import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChargePreviewMetrics } from "./chargepreviewmetrics";
import { InvoiceItemPreviewResult } from "./invoiceitempreviewresult";
import { OrderDeltaMrr } from "./orderdeltamrr";
import { OrderDeltaTcb } from "./orderdeltatcb";
import { OrderDeltaTcv } from "./orderdeltatcv";
import { OrderItem } from "./orderitem";
import { OrderMetric } from "./ordermetric";
import { OrderRampMetrics } from "./orderrampmetrics";



export class PreviewResultChargeMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=charges", elemType: ChargePreviewMetrics })
  charges?: ChargePreviewMetrics[];

  @SpeakeasyMetadata({ data: "json, name=subscriptionNumber" })
  subscriptionNumber?: string;
}


export class PreviewResultCreditMemos extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=amountWithoutTax" })
  amountWithoutTax?: number;

  @SpeakeasyMetadata({ data: "json, name=creditMemoItems", elemType: InvoiceItemPreviewResult })
  creditMemoItems?: InvoiceItemPreviewResult[];

  @SpeakeasyMetadata({ data: "json, name=targetDate" })
  targetDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=taxAmount" })
  taxAmount?: number;
}


export class PreviewResultInvoices extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=amountWithoutTax" })
  amountWithoutTax?: number;

  @SpeakeasyMetadata({ data: "json, name=invoiceItems", elemType: InvoiceItemPreviewResult })
  invoiceItems?: InvoiceItemPreviewResult[];

  @SpeakeasyMetadata({ data: "json, name=targetDate" })
  targetDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=taxAmount" })
  taxAmount?: number;
}


// PreviewResultOrderDeltaMetrics
/** 
 * **Note:** As of Zuora Billing Release 306, Zuora has upgraded the methodologies for calculating metrics in [Orders](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders). The new methodologies are reflected in the following Order Delta Metrics objects. 
 * * [Order Delta Mrr](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Delta_Metrics/Order_Delta_Mrr)
 * * [Order Delta Tcv](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Delta_Metrics/Order_Delta_Tcv)
 * * [Order Delta Tcb](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Delta_Metrics/Order_Delta_Tcb)
 * 
 * It is recommended that all customers use the new [Order Delta Metrics](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Delta_Metrics/AA_Overview_of_Order_Delta_Metrics). If you are an existing [Order Metrics](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/AA_Overview_of_Orders/Key_Metrics_for_Orders) customer and want to migrate to Order Delta Metrics, submit a request at [Zuora Global Support](https://support.zuora.com/).
 * 
**/
export class PreviewResultOrderDeltaMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=orderDeltaMrr", elemType: OrderDeltaMrr })
  orderDeltaMrr?: OrderDeltaMrr[];

  @SpeakeasyMetadata({ data: "json, name=orderDeltaTcb", elemType: OrderDeltaTcb })
  orderDeltaTcb?: OrderDeltaTcb[];

  @SpeakeasyMetadata({ data: "json, name=orderDeltaTcv", elemType: OrderDeltaTcv })
  orderDeltaTcv?: OrderDeltaTcv[];
}


export class PreviewResultOrderMetricsOrderActions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=orderItems", elemType: OrderItem })
  orderItems?: OrderItem[];

  @SpeakeasyMetadata({ data: "json, name=orderMetrics", elemType: OrderMetric })
  orderMetrics?: OrderMetric[];

  @SpeakeasyMetadata({ data: "json, name=sequence" })
  sequence?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class PreviewResultOrderMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=orderActions", elemType: PreviewResultOrderMetricsOrderActions })
  orderActions?: PreviewResultOrderMetricsOrderActions[];

  @SpeakeasyMetadata({ data: "json, name=subscriptionNumber" })
  subscriptionNumber?: string;
}


// PreviewResult
/** 
 * The result of each type of preview. Returned only when the current request is preview call.
**/
export class PreviewResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=chargeMetrics", elemType: PreviewResultChargeMetrics })
  chargeMetrics?: PreviewResultChargeMetrics[];

  @SpeakeasyMetadata({ data: "json, name=creditMemos", elemType: PreviewResultCreditMemos })
  creditMemos?: PreviewResultCreditMemos[];

  @SpeakeasyMetadata({ data: "json, name=invoices", elemType: PreviewResultInvoices })
  invoices?: PreviewResultInvoices[];

  @SpeakeasyMetadata({ data: "json, name=orderDeltaMetrics" })
  orderDeltaMetrics?: PreviewResultOrderDeltaMetrics;

  @SpeakeasyMetadata({ data: "json, name=orderMetrics", elemType: PreviewResultOrderMetrics })
  orderMetrics?: PreviewResultOrderMetrics[];

  @SpeakeasyMetadata({ data: "json, name=rampMetrics", elemType: OrderRampMetrics })
  rampMetrics?: OrderRampMetrics[];
}
