import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Pricing information about a one-time charge that uses the "per unit" charge model. In this charge model, the charge has a fixed price per unit purchased.
 *
 * @remarks
 *
 */
export declare class OneTimePerUnitPricingOverride extends SpeakeasyBase {
    /**
     * Per-unit price of the charge.
     *
     * @remarks
     *
     */
    listPrice?: number;
    /**
     * Number of units purchased.
     *
     * @remarks
     *
     */
    quantity?: number;
}
