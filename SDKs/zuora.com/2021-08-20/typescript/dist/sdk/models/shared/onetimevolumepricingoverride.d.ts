import { SpeakeasyBase } from "../../../internal/utils";
import { ChargeTier } from "./chargetier";
/**
 * Pricing information about a one-time charge that uses the "volume pricing" charge model. In this charge model, the charge has a variable price per unit, depending on how many units are purchased.
 *
**/
export declare class OneTimeVolumePricingOverride extends SpeakeasyBase {
    quantity?: number;
    tiers?: ChargeTier[];
}
