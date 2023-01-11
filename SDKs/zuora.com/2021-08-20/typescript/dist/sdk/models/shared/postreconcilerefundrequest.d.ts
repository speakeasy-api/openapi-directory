import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostReconcileRefundRequestActionEnum {
    Settle = "settle",
    Reject = "reject"
}
export declare class PostReconcileRefundRequest extends SpeakeasyBase {
    action?: PostReconcileRefundRequestActionEnum;
    actionDate?: string;
    gatewayReconciliationReason?: string;
    gatewayReconciliationStatus?: string;
    payoutId?: string;
}
