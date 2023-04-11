import { SpeakeasyBase } from "../../../internal/utils";
export declare class CurrencyFormatInfo extends SpeakeasyBase {
    /**
     * Currency decimal digits.
     */
    currencyDecimalDigits: number;
    /**
     * Currency decimal separator.
     */
    currencyDecimalSeparator: string;
    /**
     * Currency group separator.
     */
    currencyGroupSeparator: string;
    /**
     * Currency group size.
     */
    currencyGroupSize: number;
    /**
     * Indicates whether value representations start with currency symbol.
     */
    startsWithCurrencySymbol: boolean;
}
