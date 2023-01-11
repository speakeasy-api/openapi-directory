import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PreviewOrderChargeUpdate } from "./previeworderchargeupdate";



// PreviewOrderRatePlanUpdate
/** 
 * Information about an order action of type `UpdateProduct`.
 * 
**/
export class PreviewOrderRatePlanUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=chargeUpdates", elemType: PreviewOrderChargeUpdate })
  chargeUpdates?: PreviewOrderChargeUpdate[];

  @SpeakeasyMetadata({ data: "json, name=customFields" })
  customFields?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=ratePlanId" })
  ratePlanId?: string;

  @SpeakeasyMetadata({ data: "json, name=specificUpdateDate" })
  specificUpdateDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=uniqueToken" })
  uniqueToken?: string;
}
