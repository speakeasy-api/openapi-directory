import { SpeakeasyBase } from "../../../internal/utils";
import { GETProductRatePlanChargePricingTierType } from "./getproductrateplanchargepricingtiertype";
export declare class GETProductRatePlanChargePricingType extends SpeakeasyBase {
    /**
     * Currency used by the charge model. For example: USD or EUR
     *
     * @remarks
     *
     */
    currency?: string;
    /**
     * Value subtracted from price in currency specified. Used only when the charge model is DiscountFixedAmount.
     *
     * @remarks
     *
     */
    discountAmount?: string;
    /**
     * Percent discount applied to the price. Used only when the charge model is DiscountPercentage.
     *
     * @remarks
     *
     */
    discountPercentage?: string;
    /**
     * Specifies the number of units in the base set of units when the charge model is Overage.
     *
     * @remarks
     *
     */
    includedUnits?: string;
    /**
     * Price per unit when base set of units is exceeded. Used only when charge model is Overage or Tiered with Overage.
     *
     * @remarks
     *
     */
    overagePrice?: string;
    /**
     * The decimal value that applies when the charge model is not tiered
     *
     * @remarks
     *
     */
    price?: string;
    /**
     * Container for one or many defined tier ranges with distinct pricing.  Applies when model is `Tiered`, `TieredWithOverage`, or `Volume`
     *
     * @remarks
     *
     */
    tiers?: GETProductRatePlanChargePricingTierType[];
}
