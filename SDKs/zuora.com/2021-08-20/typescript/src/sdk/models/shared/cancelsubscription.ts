import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum CancelSubscriptionCancellationPolicyEnum {
    EndOfCurrentTerm = "EndOfCurrentTerm",
    EndOfLastInvoicePeriod = "EndOfLastInvoicePeriod",
    SpecificDate = "SpecificDate"
}


// CancelSubscription
/** 
 * Information about an order action of type `CancelSubscription`.
 * 
**/
export class CancelSubscription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cancellationEffectiveDate" })
  cancellationEffectiveDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=cancellationPolicy" })
  cancellationPolicy: CancelSubscriptionCancellationPolicyEnum;
}
