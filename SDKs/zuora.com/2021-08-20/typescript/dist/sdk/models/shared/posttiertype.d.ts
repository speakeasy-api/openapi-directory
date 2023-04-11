import { SpeakeasyBase } from "../../../internal/utils";
export declare class POSTTierType extends SpeakeasyBase {
    /**
     * End number of a range of units for the tier.
     *
     * @remarks
     *
     */
    endingUnit?: number;
    /**
     * Price of the tier if the charge is a flat fee, or the price of each unit in the tier if the charge model is tiered pricing.
     *
     * @remarks
     *
     */
    price: number;
    /**
     * Indicates if pricing is a flat fee or is per unit.
     *
     * @remarks
     *
     * Values:
     *
     * * `FlatFee`
     * * `PerUnit`
     *
     */
    priceFormat?: string;
    /**
     * Starting number of a range of units for the tier.
     *
     * @remarks
     *
     */
    startingUnit?: number;
    /**
     * Unique number that identifies the tier that the price applies to.
     *
     * @remarks
     *
     */
    tier: number;
}
