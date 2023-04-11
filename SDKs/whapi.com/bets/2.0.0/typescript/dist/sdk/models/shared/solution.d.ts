import { SpeakeasyBase } from "../../../internal/utils";
export declare class Solution extends SpeakeasyBase {
    /**
     * The bet number
     */
    betNum?: string;
    /**
     * The identifier of the event
     */
    eventId?: string;
    /**
     * The updated handicap
     */
    handicap?: string;
    /**
     * The handicap precision
     */
    handicapPrecision?: string;
    /**
     * When the odds are shown in vulgar fractions this is the denominator of the fraction. For example: 2 in 5/2
     */
    priceDen?: string;
    /**
     * When the odds are shown in vulgar fractions this is the numerator of the fraction. For example: 5 in 5/2
     */
    priceNum?: string;
    /**
     * The selection handicap
     */
    selectionHandicap?: string;
    /**
     * The identifier of the selection
     */
    selectionId?: string;
}
