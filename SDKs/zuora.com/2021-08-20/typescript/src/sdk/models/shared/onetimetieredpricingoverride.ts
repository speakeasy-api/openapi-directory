import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChargeTier } from "./chargetier";



// OneTimeTieredPricingOverride
/** 
 * Pricing information about a one-time charge that uses the "tiered pricing" charge model. In this charge model, the charge has cumulative pricing tiers that become effective as units are purchased.
 * 
**/
export class OneTimeTieredPricingOverride extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: number;

  @SpeakeasyMetadata({ data: "json, name=tiers", elemType: ChargeTier })
  tiers?: ChargeTier[];
}
