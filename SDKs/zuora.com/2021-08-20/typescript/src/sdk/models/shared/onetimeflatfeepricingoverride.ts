import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OneTimeFlatFeePricingOverride
/** 
 * Pricing information about a one-time charge that uses the "flat fee" charge model. In this charge model, the charge has a fixed price.
 * 
**/
export class OneTimeFlatFeePricingOverride extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=listPrice" })
  listPrice: number;
}
