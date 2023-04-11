import { SpeakeasyBase } from "../../../internal/utils";
import { FixedPrice } from "./fixedprice";
/**
 * OK
 */
export declare class Getprice extends SpeakeasyBase {
    /**
     * SKU's reference price.
     */
    basePrice: number;
    /**
     * SKU's cost price.
     */
    costPrice: number;
    /**
     * The fixed price is a price that overlaps all other existing price configurations of a price table.
     */
    fixedPrices: FixedPrice[];
    /**
     * SKU ID.
     */
    itemId: string;
    /**
     * Suggested retail price for the SKU.
     */
    listPrice: number;
    /**
     * Desired profit margin with the SKU's sale.
     */
    markup: number;
}
