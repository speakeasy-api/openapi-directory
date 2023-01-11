import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CreateOrderChargeUpdate } from "./createorderchargeupdate";



// CreateOrderRatePlanUpdate
/** 
 * Information about an order action of type `UpdateProduct`.
 * 
**/
export class CreateOrderRatePlanUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=chargeUpdates", elemType: CreateOrderChargeUpdate })
  chargeUpdates?: CreateOrderChargeUpdate[];

  @SpeakeasyMetadata({ data: "json, name=customFields" })
  customFields?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=ratePlanId" })
  ratePlanId?: string;

  @SpeakeasyMetadata({ data: "json, name=specificUpdateDate" })
  specificUpdateDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=uniqueToken" })
  uniqueToken?: string;
}
