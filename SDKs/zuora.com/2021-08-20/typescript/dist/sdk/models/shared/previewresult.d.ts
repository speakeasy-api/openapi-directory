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
    /**
     * The number of the subscription that has been affected by this order. When creating a subscription, this value will not show if the subscription number was not specified in the request.
     */
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
 *
 * @remarks
 * * [Order Delta Mrr](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Delta_Metrics/Order_Delta_Mrr)
 * * [Order Delta Tcv](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Delta_Metrics/Order_Delta_Tcv)
 * * [Order Delta Tcb](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Delta_Metrics/Order_Delta_Tcb)
 *
 * It is recommended that all customers use the new [Order Delta Metrics](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Delta_Metrics/AA_Overview_of_Order_Delta_Metrics). If you are an existing [Order Metrics](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/AA_Overview_of_Orders/Key_Metrics_for_Orders) customer and want to migrate to Order Delta Metrics, submit a request at [Zuora Global Support](https://support.zuora.com/).
 *
 */
export declare class PreviewResultOrderDeltaMetrics extends SpeakeasyBase {
    orderDeltaMrr?: OrderDeltaMrr[];
    orderDeltaTcb?: OrderDeltaTcb[];
    orderDeltaTcv?: OrderDeltaTcv[];
}
export declare class PreviewResultOrderMetricsOrderActions extends SpeakeasyBase {
    /**
     * The `orderItems` nested field is only available to existing Orders customers who already have access to the field.
     *
     * @remarks
     *
     * **Note:** The following Order Metrics have been deprecated. Any new customers who onboard on [Orders](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/AA_Overview_of_Orders) or [Orders Harmonization](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Orders_Harmonization/Orders_Harmonization) will not get these metrics.
     * * The Order ELP and Order Item objects
     * * The "Generated Reason" and "Order Item ID" fields in the Order MRR, Order TCB, Order TCV, and Order Quantity objects
     *
     * Existing Orders customers who have these metrics will continue to be supported.
     *
     */
    orderItems?: OrderItem[];
    /**
     * The container for order metrics.
     *
     * @remarks
     *
     * **Note:** The following Order Metrics have been deprecated. Any new customers who onboard on [Orders](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/AA_Overview_of_Orders) or [Orders Harmonization](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Orders_Harmonization/Orders_Harmonization) will not get these metrics.
     * * The Order ELP and Order Item objects
     * * The "Generated Reason" and "Order Item ID" fields in the Order MRR, Order TCB, Order TCV, and Order Quantity objects
     *
     * Existing Orders customers who have these metrics will continue to be supported.
     *
     */
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
 */
export declare class PreviewResult extends SpeakeasyBase {
    chargeMetrics?: PreviewResultChargeMetrics[];
    /**
     * This field is only available if you have the Invoice Settlement feature enabled.
     */
    creditMemos?: PreviewResultCreditMemos[];
    invoices?: PreviewResultInvoices[];
    /**
     * **Note:** As of Zuora Billing Release 306, Zuora has upgraded the methodologies for calculating metrics in [Orders](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders). The new methodologies are reflected in the following Order Delta Metrics objects.
     *
     * @remarks
     * * [Order Delta Mrr](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Delta_Metrics/Order_Delta_Mrr)
     * * [Order Delta Tcv](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Delta_Metrics/Order_Delta_Tcv)
     * * [Order Delta Tcb](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Delta_Metrics/Order_Delta_Tcb)
     *
     * It is recommended that all customers use the new [Order Delta Metrics](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Delta_Metrics/AA_Overview_of_Order_Delta_Metrics). If you are an existing [Order Metrics](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/AA_Overview_of_Orders/Key_Metrics_for_Orders) customer and want to migrate to Order Delta Metrics, submit a request at [Zuora Global Support](https://support.zuora.com/).
     *
     */
    orderDeltaMetrics?: PreviewResultOrderDeltaMetrics;
    /**
     * **Note:** As of Zuora Billing Release 306, Zuora has upgraded the methodologies for calculating metrics in [Orders](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders). The new methodologies are reflected in the following Order Delta Metrics objects.
     *
     * @remarks
     * * [Order Delta Mrr](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Delta_Metrics/Order_Delta_Mrr)
     * * [Order Delta Tcv](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Delta_Metrics/Order_Delta_Tcv)
     * * [Order Delta Tcb](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Delta_Metrics/Order_Delta_Tcb)
     *
     * It is recommended that all customers use the new [Order Delta Metrics](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Delta_Metrics/AA_Overview_of_Order_Delta_Metrics). If you are an existing [Order Metrics](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/AA_Overview_of_Orders/Key_Metrics_for_Orders) customer and want to migrate to Order Delta Metrics, submit a request at [Zuora Global Support](https://support.zuora.com/).
     *
     * Whereas new customers, and existing customers not currently on [Order Metrics](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/AA_Overview_of_Orders/Key_Metrics_for_Orders), will no longer have access to Order Metrics, existing customers currently using Order Metrics will continue to be supported.
     *
     */
    orderMetrics?: PreviewResultOrderMetrics[];
    /**
     * **Note**: This field is only available if you have the Ramps feature enabled. The [Orders](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/AA_Overview_of_Orders) feature must be enabled before you can access the [Ramps](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Ramps_and_Ramp_Metrics/A_Overview_of_Ramps_and_Ramp_Metrics) feature. The Ramps feature is available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/C_Zuora_Editions) for pricing information coming October 2020.
     *
     * @remarks
     *
     * The ramp metrics.
     *
     */
    rampMetrics?: OrderRampMetrics[];
}
