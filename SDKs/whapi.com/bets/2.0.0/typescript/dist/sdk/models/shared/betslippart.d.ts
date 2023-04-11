import { SpeakeasyBase } from "../../../internal/utils";
export declare class Betslippart extends SpeakeasyBase {
    /**
     * Indicates whether each way is available
     */
    eachWayAvailable?: boolean;
    /**
     * Indicates if the bet can be used in a multiple bet
     */
    includeInMultiple: boolean;
    /**
     * To organise a number of outcome selections into one or more bet groups, such as a Single bet, a Double bet, a Trixie, etc
     */
    legGroup?: number;
    /**
     * Indicates if there has been a change in the price
     */
    priceChanged?: boolean;
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
    /**
     * Indicates whether the bet can be used in a single bet
     */
    singleAvailable?: boolean;
    /**
     * Indicates whether starting prices are available
     */
    startingPriceAvailable?: boolean;
    /**
     * Indicates the current status of the bet
     */
    status?: string;
    /**
     * Indicates whether the status of the bet has changed
     */
    statusChanged?: boolean;
}
