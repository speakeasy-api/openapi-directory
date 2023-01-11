import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostBillingPreviewRunParam extends SpeakeasyBase {
    assumeRenewal?: string;
    batch?: string;
    chargeTypeToExclude?: string;
    includingEvergreenSubscription?: boolean;
    targetDate: Date;
}
