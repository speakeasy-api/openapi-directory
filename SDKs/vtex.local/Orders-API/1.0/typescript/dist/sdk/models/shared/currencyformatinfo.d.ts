import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Object with currency format details.
 */
export declare class CurrencyFormatInfo extends SpeakeasyBase {
    /**
     * Quantity of currency decimal digits.
     */
    currencyDecimalDigits: number;
    /**
     * Defines what currency decimal separator will be applied.
     */
    currencyDecimalSeparator: string;
    /**
     * Defines what currency group separator will be applied.
     */
    currencyGroupSeparator: string;
    /**
     * Defines how many characters will be grouped.
     */
    currencyGroupSize: number;
    /**
     * Defines if all prices will be initiated with the currency symbol (`true`) or not (`false`).
     */
    startsWithCurrencySymbol: boolean;
}
