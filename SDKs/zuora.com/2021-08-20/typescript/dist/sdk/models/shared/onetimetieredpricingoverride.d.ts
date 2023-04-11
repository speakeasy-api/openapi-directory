import { SpeakeasyBase } from "../../../internal/utils";
import { ChargeTier } from "./chargetier";
/**
 * Pricing information about a one-time charge that uses the "tiered pricing" charge model. In this charge model, the charge has cumulative pricing tiers that become effective as units are purchased.
 *
 * @remarks
 *
 */
export declare class OneTimeTieredPricingOverride extends SpeakeasyBase {
    /**
     * Number of units purchased.
     *
     * @remarks
     *
     */
    quantity?: number;
    /**
     * List of cumulative pricing tiers in the charge.
     *
     * @remarks
     *
     */
    tiers?: ChargeTier[];
}
