import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Indicates if pricing is a flat fee or is per unit. This field is for tiered and volume pricing models only.
 *
 * @remarks
 *
 */
export declare enum ProxyCreateOrModifyProductRatePlanChargeTierDataProductRatePlanChargeTierPriceFormatEnum {
    FlatFee = "Flat Fee",
    PerUnit = "Per Unit"
}
export declare class ProxyCreateOrModifyProductRatePlanChargeTierDataProductRatePlanChargeTier extends SpeakeasyBase {
    /**
     * The code corresponding to the currency for the tier's price.
     *
     * @remarks
     *
     */
    currency?: string;
    /**
     * The specific amount for a fixed discount. Required if the charge model of the product rate plan charge is `Discount-Fixed Amount`.
     *
     * @remarks
     *
     */
    discountAmount?: number;
    /**
     * The percentage of discount for a percentage discount. Required if the charge model of the product rate plan charge is `Discount-Percentage`.
     *
     * @remarks
     *
     */
    discountPercentage?: number;
    /**
     * The end number of a range of units for the tier. Required if the charge model of the product rate plan charge is `Tiered Pricing` or `Tiered with Overage Pricing`.
     *
     * @remarks
     *
     */
    endingUnit?: number;
    /**
     * Indicates if the price is an overage price, which is the price when usage surpasses the last defined tier.
     *
     * @remarks
     *
     */
    isOveragePrice?: boolean;
    /**
     * The price of the tier if the charge is a flat fee, or the price of each unit in the tier if the charge model is tiered pricing.
     *
     * @remarks
     *
     */
    price?: number;
    /**
     * Indicates if pricing is a flat fee or is per unit. This field is for tiered and volume pricing models only.
     *
     * @remarks
     *
     */
    priceFormat?: ProxyCreateOrModifyProductRatePlanChargeTierDataProductRatePlanChargeTierPriceFormatEnum;
    /**
     * The starting number of a range of units for the tier. Required if the charge model of the product rate plan charge is `Tiered Pricing` or `Tiered with Overage Pricing`.
     *
     * @remarks
     *
     */
    startingUnit?: number;
}
/**
 * Container for pricing information associated with the product rate plan charge.
 *
 * @remarks
 *
 */
export declare class ProxyCreateOrModifyProductRatePlanChargeTierData extends SpeakeasyBase {
    /**
     * Array of product rate plan charge tiers.
     *
     * @remarks
     *
     * You should specify all relevant fields of all tiers, including pricing information for each currency.
     *
     * For each currency, ensure that the tiers appear in ascending order of `StartingUnit`.
     *
     * For example:
     *
     * ```
     * [
     *   {
     *     "StartingUnit": "1",
     *     "EndingUnit": "150",
     *     "Currency": "USD",
     *     "Price": 1.95,
     *     "PriceFormat": "Per Unit"
     *   },
     *   {
     *     "StartingUnit": "151",
     *     "EndingUnit": "300",
     *     "Currency": "USD",
     *     "Price": 1.45,
     *     "PriceFormat": "Per Unit"
     *   },
     *   {
     *     "StartingUnit": "1",
     *     "EndingUnit": "150",
     *     "Currency": "EUR",
     *     "Price": 1.75,
     *     "PriceFormat": "Per Unit"
     *   },
     *   {
     *     "StartingUnit": "151",
     *     "EndingUnit": "300",
     *     "Currency": "EUR",
     *     "Price": 1.30,
     *     "PriceFormat": "Per Unit"
     *   }
     * ]
     * ```
     *
     */
    productRatePlanChargeTier?: ProxyCreateOrModifyProductRatePlanChargeTierDataProductRatePlanChargeTier[];
}
