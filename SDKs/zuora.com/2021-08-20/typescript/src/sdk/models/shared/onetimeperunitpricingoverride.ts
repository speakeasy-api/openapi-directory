import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OneTimePerUnitPricingOverride
/** 
 * Pricing information about a one-time charge that uses the "per unit" charge model. In this charge model, the charge has a fixed price per unit purchased.
 * 
**/
export class OneTimePerUnitPricingOverride extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=listPrice" })
  listPrice?: number;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: number;
}
