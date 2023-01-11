import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OrderDeltaMrr
/** 
 * Order Delta Mrr. This is a metric that reflects the change to the TCV on rate plan charge object as the result of the order.
 * 
**/
export class OrderDeltaMrr extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=chargeNumber" })
  chargeNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=endDate" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=grossAmount" })
  grossAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=netAmount" })
  netAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=orderActionId" })
  orderActionId?: string;

  @SpeakeasyMetadata({ data: "json, name=orderActionSequence" })
  orderActionSequence?: string;

  @SpeakeasyMetadata({ data: "json, name=orderActionType" })
  orderActionType?: string;

  @SpeakeasyMetadata({ data: "json, name=productRatePlanChargeId" })
  productRatePlanChargeId?: string;

  @SpeakeasyMetadata({ data: "json, name=ratePlanChargeId" })
  ratePlanChargeId?: string;

  @SpeakeasyMetadata({ data: "json, name=startDate" })
  startDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=subscriptionNumber" })
  subscriptionNumber?: string;
}
