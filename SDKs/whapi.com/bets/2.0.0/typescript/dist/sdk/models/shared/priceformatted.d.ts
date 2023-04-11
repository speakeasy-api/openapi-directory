import { SpeakeasyBase } from "../../../internal/utils";
export declare class PriceFormatted extends SpeakeasyBase {
    /**
     * The price in American format
     */
    american?: string;
    /**
     * The decimal format of the price
     */
    decimal?: number;
    /**
     * The fractional format of the price or EVS when the price evens.
     */
    fractional?: string;
}
