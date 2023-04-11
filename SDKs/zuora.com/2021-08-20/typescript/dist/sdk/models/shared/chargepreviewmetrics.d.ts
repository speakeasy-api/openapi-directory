import { SpeakeasyBase } from "../../../internal/utils";
export declare class ChargePreviewMetricsCmrr extends SpeakeasyBase {
    /**
     * Total discountCmrr of all discount charges which are applied to one specific recurring charge. This value is calculated from the rating results for the latest subscription version in the order. Only selects the applied discount charge when its endDateCondition is "Subscription_End".
     */
    discount?: number;
    /**
     * Delta discountCmrr value between the order base and the latest subscription version.
     */
    discountDelta?: number;
    regular?: number;
    regularDelta?: number;
}
export declare class ChargePreviewMetricsTax extends SpeakeasyBase {
    /**
     * Total tax amount of all discount charges which are applied to one specific recurring charge. This value is calculated from the rating results for the latest subscription version in the order.
     */
    discount?: number;
    /**
     * Delta discount TAX value between the base and the latest subscription version in the order for the specific recurring charge.
     */
    discountDelta?: number;
    regular?: number;
    /**
     * Delta tax value between the base and the latest subscription version in the order.
     */
    regularDelta?: number;
}
export declare class ChargePreviewMetricsTcb extends SpeakeasyBase {
    /**
     * Total contract billing amount of all discount charges which are applied to one specific recurring charge. This value is calculated from the rating results for the latest subscription version in the order.
     */
    discount?: number;
    /**
     * Delta discount TCB value between the base and the latest subscription version for specific recurring charge in the order.
     */
    discountDelta?: number;
    regular?: number;
    /**
     * Delta TCB value between the base and the latest subscription version in the order.
     */
    regularDelta?: number;
}
export declare class ChargePreviewMetricsTcv extends SpeakeasyBase {
    /**
     * Always equals to discountTcb.
     */
    discount?: number;
    /**
     * Always equals to delta discountTcb.
     */
    discountDelta?: number;
    regular?: number;
    regularDelta?: number;
}
export declare class ChargePreviewMetrics extends SpeakeasyBase {
    chargeNumber?: string;
    cmrr?: ChargePreviewMetricsCmrr;
    originRatePlanId?: string;
    productRatePlanChargeId?: string;
    productRatePlanId?: string;
    tax?: ChargePreviewMetricsTax;
    tcb?: ChargePreviewMetricsTcb;
    tcv?: ChargePreviewMetricsTcv;
}
