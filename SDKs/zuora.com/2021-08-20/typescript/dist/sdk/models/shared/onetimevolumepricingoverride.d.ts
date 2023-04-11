import { SpeakeasyBase } from "../../../internal/utils";
import { ChargeTier } from "./chargetier";
/**
 * Pricing information about a one-time charge that uses the "volume pricing" charge model. In this charge model, the charge has a variable price per unit, depending on how many units are purchased.
 *
 * @remarks
 *
 */
export declare class OneTimeVolumePricingOverride extends SpeakeasyBase {
    /**
     * Number of units purchased.
     *
     * @remarks
     *
     */
    quantity?: number;
    /**
     * List of variable pricing tiers in the charge.
     *
     * @remarks
     *
     */
    tiers?: ChargeTier[];
}
