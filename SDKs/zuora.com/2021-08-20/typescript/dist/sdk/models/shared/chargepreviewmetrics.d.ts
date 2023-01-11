import { SpeakeasyBase } from "../../../internal/utils";
export declare class ChargePreviewMetricsCmrr extends SpeakeasyBase {
    discount?: number;
    discountDelta?: number;
    regular?: number;
    regularDelta?: number;
}
export declare class ChargePreviewMetricsTax extends SpeakeasyBase {
    discount?: number;
    discountDelta?: number;
    regular?: number;
    regularDelta?: number;
}
export declare class ChargePreviewMetricsTcb extends SpeakeasyBase {
    discount?: number;
    discountDelta?: number;
    regular?: number;
    regularDelta?: number;
}
export declare class ChargePreviewMetricsTcv extends SpeakeasyBase {
    discount?: number;
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
