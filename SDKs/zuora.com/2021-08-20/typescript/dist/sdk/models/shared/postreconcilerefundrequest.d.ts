import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The action of the refund reconciliation.
 *
 * @remarks
 *   - `settle`: Sets the gatewayState to "Settled" and returns the refund object as response.
 *   - `reject`: Sets the gatewayState to "FailedToSettle" and handle the event according to the settings configured in the Gateway Reconciliation Configuration in Payments Settings through Zuora UI. See [Configure how to handle refund rejected events](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/M_Payment_Gateways/Gateway_Reconciliation#Configure_how_to_handle_refund_rejected_events) for details.
 *
 */
export declare enum POSTReconcileRefundRequestActionEnum {
    Settle = "settle",
    Reject = "reject"
}
export declare class POSTReconcileRefundRequest extends SpeakeasyBase {
    /**
     * The action of the refund reconciliation.
     *
     * @remarks
     *   - `settle`: Sets the gatewayState to "Settled" and returns the refund object as response.
     *   - `reject`: Sets the gatewayState to "FailedToSettle" and handle the event according to the settings configured in the Gateway Reconciliation Configuration in Payments Settings through Zuora UI. See [Configure how to handle refund rejected events](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/M_Payment_Gateways/Gateway_Reconciliation#Configure_how_to_handle_refund_rejected_events) for details.
     *
     */
    action?: POSTReconcileRefundRequestActionEnum;
    /**
     * The date and time of the refund reconciliation action, in `yyyy-mm-dd hh:mm:ss` format.
     *
     * @remarks
     *
     */
    actionDate?: string;
    /**
     * The reason of gateway reconciliation.
     *
     * @remarks
     *
     */
    gatewayReconciliationReason?: string;
    /**
     * The status of gateway reconciliation.
     *
     * @remarks
     *
     */
    gatewayReconciliationStatus?: string;
    /**
     * The payout ID of the refund from the gateway side.
     *
     * @remarks
     *
     */
    payoutId?: string;
}
