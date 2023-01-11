import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostBillingPreviewParam extends SpeakeasyBase {
    accountId: string;
    assumeRenewal?: string;
    chargeTypeToExclude?: string;
    includingEvergreenSubscription?: boolean;
    targetDate: Date;
}
