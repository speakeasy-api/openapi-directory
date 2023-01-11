import { SpeakeasyBase } from "../../../internal/utils";
import { ChargePreviewMetrics } from "./chargepreviewmetrics";
import { InvoiceItemPreviewResult } from "./invoiceitempreviewresult";
import { OrderDeltaMrr } from "./orderdeltamrr";
import { OrderDeltaTcb } from "./orderdeltatcb";
import { OrderDeltaTcv } from "./orderdeltatcv";
import { OrderItem } from "./orderitem";
import { OrderMetric } from "./ordermetric";
import { OrderRampMetrics } from "./orderrampmetrics";
export declare class PreviewResultChargeMetrics extends SpeakeasyBase {
    charges?: ChargePreviewMetrics[];
    subscriptionNumber?: string;
}
export declare class PreviewResultCreditMemos extends SpeakeasyBase {
    amount?: number;
    amountWithoutTax?: number;
    creditMemoItems?: InvoiceItemPreviewResult[];
    targetDate?: Date;
    taxAmount?: number;
}
export declare class PreviewResultInvoices extends SpeakeasyBase {
    amount?: number;
    amountWithoutTax?: number;
    invoiceItems?: InvoiceItemPreviewResult[];
    targetDate?: Date;
    taxAmount?: number;
}
/**
 * **Note:** As of Zuora Billing Release 306, Zuora has upgraded the methodologies for calculating metrics in [Orders](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders). The new methodologies are reflected in the following Order Delta Metrics objects.
 * * [Order Delta Mrr](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Delta_Metrics/Order_Delta_Mrr)
 * * [Order Delta Tcv](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Delta_Metrics/Order_Delta_Tcv)
 * * [Order Delta Tcb](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Delta_Metrics/Order_Delta_Tcb)
 *
 * It is recommended that all customers use the new [Order Delta Metrics](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Delta_Metrics/AA_Overview_of_Order_Delta_Metrics). If you are an existing [Order Metrics](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/AA_Overview_of_Orders/Key_Metrics_for_Orders) customer and want to migrate to Order Delta Metrics, submit a request at [Zuora Global Support](https://support.zuora.com/).
 *
**/
export declare class PreviewResultOrderDeltaMetrics extends SpeakeasyBase {
    orderDeltaMrr?: OrderDeltaMrr[];
    orderDeltaTcb?: OrderDeltaTcb[];
    orderDeltaTcv?: OrderDeltaTcv[];
}
export declare class PreviewResultOrderMetricsOrderActions extends SpeakeasyBase {
    orderItems?: OrderItem[];
    orderMetrics?: OrderMetric[];
    sequence?: string;
    type?: string;
}
export declare class PreviewResultOrderMetrics extends SpeakeasyBase {
    orderActions?: PreviewResultOrderMetricsOrderActions[];
    subscriptionNumber?: string;
}
/**
 * The result of each type of preview. Returned only when the current request is preview call.
**/
export declare class PreviewResult extends SpeakeasyBase {
    chargeMetrics?: PreviewResultChargeMetrics[];
    creditMemos?: PreviewResultCreditMemos[];
    invoices?: PreviewResultInvoices[];
    orderDeltaMetrics?: PreviewResultOrderDeltaMetrics;
    orderMetrics?: PreviewResultOrderMetrics[];
    rampMetrics?: OrderRampMetrics[];
}
