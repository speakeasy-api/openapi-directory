import { SpeakeasyBase } from "../../../internal/utils";
import { ChargeTier } from "./chargetier";
/**
 * Pricing information about a one-time charge that uses the "tiered pricing" charge model. In this charge model, the charge has cumulative pricing tiers that become effective as units are purchased.
 *
**/
export declare class OneTimeTieredPricingOverride extends SpeakeasyBase {
    quantity?: number;
    tiers?: ChargeTier[];
}
