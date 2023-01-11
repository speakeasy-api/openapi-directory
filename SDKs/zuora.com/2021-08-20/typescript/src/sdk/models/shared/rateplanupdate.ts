import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChargeUpdate } from "./chargeupdate";



// RatePlanUpdate
/** 
 * Information about an order action of type `UpdateProduct`.
 * 
**/
export class RatePlanUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=chargeUpdates", elemType: ChargeUpdate })
  chargeUpdates?: ChargeUpdate[];

  @SpeakeasyMetadata({ data: "json, name=customFields" })
  customFields?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=newRatePlanId" })
  newRatePlanId?: string;

  @SpeakeasyMetadata({ data: "json, name=ratePlanId" })
  ratePlanId?: string;

  @SpeakeasyMetadata({ data: "json, name=specificUpdateDate" })
  specificUpdateDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=uniqueToken" })
  uniqueToken?: string;
}
