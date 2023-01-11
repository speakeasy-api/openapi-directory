import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OrderDeltaTcb
/** 
 * Order Delta Tcb. This is a metric that reflects the change to the estimated billing on Rate Plan Charge object, or the estimated billing for an Order Line Item as the result of the order
 * 
**/
export class OrderDeltaTcb extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=orderLineItemId" })
  orderLineItemId?: string;

  @SpeakeasyMetadata({ data: "json, name=productRatePlanChargeId" })
  productRatePlanChargeId?: string;

  @SpeakeasyMetadata({ data: "json, name=ratePlanChargeId" })
  ratePlanChargeId?: string;

  @SpeakeasyMetadata({ data: "json, name=startDate" })
  startDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=subscriptionNumber" })
  subscriptionNumber?: string;
}
