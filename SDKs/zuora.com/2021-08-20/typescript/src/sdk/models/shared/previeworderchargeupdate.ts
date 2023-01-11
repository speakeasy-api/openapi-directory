import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BillingUpdate } from "./billingupdate";
import { PreviewOrderTriggerParams } from "./previewordertriggerparams";
import { PreviewOrderPricingUpdate } from "./previeworderpricingupdate";



export class PreviewOrderChargeUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=billing" })
  billing?: BillingUpdate;

  @SpeakeasyMetadata({ data: "json, name=chargeNumber" })
  chargeNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=customFields" })
  customFields?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=effectiveDate" })
  effectiveDate?: PreviewOrderTriggerParams;

  @SpeakeasyMetadata({ data: "json, name=pricing" })
  pricing?: PreviewOrderPricingUpdate;

  @SpeakeasyMetadata({ data: "json, name=uniqueToken" })
  uniqueToken?: string;
}
