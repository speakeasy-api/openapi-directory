import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CancelSubscriptionCancellationPolicyEnum {
    EndOfCurrentTerm = "EndOfCurrentTerm",
    EndOfLastInvoicePeriod = "EndOfLastInvoicePeriod",
    SpecificDate = "SpecificDate"
}
/**
 * Information about an order action of type `CancelSubscription`.
 *
 * @remarks
 *
 */
export declare class CancelSubscription extends SpeakeasyBase {
    cancellationEffectiveDate?: Date;
    cancellationPolicy: CancelSubscriptionCancellationPolicyEnum;
}
