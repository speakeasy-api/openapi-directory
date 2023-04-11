import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies whether the tier has a fixed price or a per-unit price.
 *
 * @remarks
 *
 */
export declare enum ChargeTierPriceFormatEnum {
    FlatFee = "FlatFee",
    PerUnit = "PerUnit"
}
export declare class ChargeTier extends SpeakeasyBase {
    /**
     * Limit on the number of units for which the tier is effective.
     *
     * @remarks
     *
     */
    endingUnit?: number;
    /**
     * Price or per-unit price of the tier, depending on the value of the `priceFormat` field.
     *
     * @remarks
     *
     */
    price: number;
    /**
     * Specifies whether the tier has a fixed price or a per-unit price.
     *
     * @remarks
     *
     */
    priceFormat: ChargeTierPriceFormatEnum;
    /**
     * Number of units at which the tier becomes effective.
     *
     * @remarks
     *
     */
    startingUnit: number;
    /**
     * Index of the tier in the charge.
     *
     * @remarks
     *
     */
    tier: number;
}
