import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum BillingUpdateBillingPeriodAlignmentEnum {
    AlignToCharge = "AlignToCharge",
    AlignToSubscriptionStart = "AlignToSubscriptionStart",
    AlignToTermStart = "AlignToTermStart"
}


export class BillingUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=billingPeriodAlignment" })
  billingPeriodAlignment?: BillingUpdateBillingPeriodAlignmentEnum;
}
