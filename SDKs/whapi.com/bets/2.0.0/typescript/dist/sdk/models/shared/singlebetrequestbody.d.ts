import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Single bet request body
 */
export declare class SingleBetRequestBody extends SpeakeasyBase {
    /**
     * The delayed bet identifier
     */
    delayedBetId?: string;
    /**
     * The ID number of the free bet token if used in conjunction with this bet
     */
    freeBetId?: string;
    /**
     * When the odds are shown in vulgar fractions this is the denominator of the fraction. For example: 2 in 5/2
     */
    priceDen?: number;
    /**
     * When the odds are shown in vulgar fractions this is the numerator of the fraction. For example: 5 in 5/2
     */
    priceNum?: number;
    /**
     * The type of price taken by the customer when the bet is made. Can be one of the following: L - Live Fixed price, S - Starting price - Horse and Greyhound racing or G - Guaranteed best price.
     */
    priceType: string;
    /**
     * The unique ID for the selection of the bet
     */
    selectionId: string;
    /**
     * The amount of the stake placed on the bet
     */
    stake: number;
    /**
     * The type of bet placed. Can be one of the following: W - Win or E- EachWay
     */
    type: string;
}
