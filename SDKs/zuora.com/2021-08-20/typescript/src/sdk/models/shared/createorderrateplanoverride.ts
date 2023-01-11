import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CreateOrderChargeOverride } from "./createorderchargeoverride";



// CreateOrderRatePlanOverride
/** 
 * Information about an order action of type `addProduct`. 
 * 
 * If you want to create a pending order through the "Add product" order action, and if the charge's trigger condition is `Specific Date`, you must set a charge number in the `chargeNumber` field for the "Add product" order action. In this case, if you do not set it, Zuora will not generate the charge number for you.
 * 
 * See more information about pending orders in [Pending Order and Subscription](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/Pending_Order_and_Subscription). 
 * 
**/
export class CreateOrderRatePlanOverride extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=chargeOverrides", elemType: CreateOrderChargeOverride })
  chargeOverrides?: CreateOrderChargeOverride[];

  @SpeakeasyMetadata({ data: "json, name=customFields" })
  customFields?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=productRatePlanId" })
  productRatePlanId: string;

  @SpeakeasyMetadata({ data: "json, name=uniqueToken" })
  uniqueToken?: string;
}
