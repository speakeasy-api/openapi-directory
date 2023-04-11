import { SpeakeasyBase } from "../../../internal/utils";
export declare class GETTierType extends SpeakeasyBase {
    /**
     * Decimal defining end of tier range.
     *
     * @remarks
     *
     */
    endingUnit?: number;
    /**
     * The decimal value of the tiered charge model. If the charge model is not a tiered type then this price field will be null and the `price` field directly under the `productRatePlanCharges` applies.
     *
     * @remarks
     *
     */
    price?: number;
    /**
     * Tier price format. Allowed values: `flat fee`, `per unit`.
     *
     * @remarks
     *
     */
    priceFormat?: string;
    /**
     * Decimal defining start of tier range.
     *
     * @remarks
     *
     */
    startingUnit?: number;
    /**
     * Unique number of the tier.
     *
     * @remarks
     *
     */
    tier?: number;
}
