import { SpeakeasyBase } from "../../../internal/utils";
export declare enum BillingUpdateBillingPeriodAlignmentEnum {
    AlignToCharge = "AlignToCharge",
    AlignToSubscriptionStart = "AlignToSubscriptionStart",
    AlignToTermStart = "AlignToTermStart"
}
export declare class BillingUpdate extends SpeakeasyBase {
    billingPeriodAlignment?: BillingUpdateBillingPeriodAlignmentEnum;
}
