import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK
 */
export declare class Getcomputedprice extends SpeakeasyBase {
    /**
     * Cost price.
     */
    costPrice?: number;
    /**
     * Trade Policy List Price, also known as "from" price.
     */
    listPrice: number;
    /**
     * Date until when the computed price will be valid, due to price scheduling. If no price scheduling applies, this will be set a year from the current time.
     */
    priceValidUntil: string;
    /**
     * Computed Price before applying coupons, promotions and taxes. This price may change before reaching the shelf.
     */
    sellingPrice: number;
    /**
     * Trade Policy ID.
     */
    tradePolicyId: string;
}
