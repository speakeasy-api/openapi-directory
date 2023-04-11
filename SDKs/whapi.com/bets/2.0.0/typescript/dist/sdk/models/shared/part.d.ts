import { SpeakeasyBase } from "../../../internal/utils";
export declare class Part extends SpeakeasyBase {
    /**
     * Indicates if the bet can be used in a multiple bet
     */
    includeInMultiple: boolean;
    /**
     * Price denominator - will be ignored for types other than L (Fixed Price)
     */
    priceDen: number;
    /**
     * Price numerator - will be ignored for types other than L (Fixed Price)
     */
    priceNum: number;
    /**
     * The type of price selected. For example - ‘L’ (Fixed)
     */
    priceType: number;
    /**
     * The selection identifier
     */
    selectionId: number;
}
