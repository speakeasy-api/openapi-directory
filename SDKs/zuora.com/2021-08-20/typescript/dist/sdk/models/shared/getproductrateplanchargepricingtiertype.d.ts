import { SpeakeasyBase } from "../../../internal/utils";
export declare class GETProductRatePlanChargePricingTierType extends SpeakeasyBase {
    /**
     * Decimal defining end of tier range.
     *
     * @remarks
     *
     */
    endingUnit?: string;
    /**
     * The decimal value of the tiered charge model. If the charge model is not a tiered type then this price field will be null and the price field directly under the productRatePlanCharges applies.
     *
     * @remarks
     *
     */
    price?: string;
    /**
     * Tier price format.
     *
     * @remarks
     *
     * Allowed values:
     * - flat fee
     * - per unit
     *
     */
    priceFormat?: string;
    /**
     * Decimal defining start of tier range.
     *
     * @remarks
     *
     */
    startingUnit?: string;
    /**
     * Unique number of the tier.
     *
     * @remarks
     *
     */
    tier?: number;
}
