import { SpeakeasyBase } from "../../../internal/utils";
import { PlacedBetLeg } from "./placedbetleg";
export declare class PlacedBet extends SpeakeasyBase {
    /**
     * The cash in value of the bet. For example £0.88. When no value is given or no value is present, no cash in is available
     */
    cashinValue?: number;
    /**
     * The estimated value of the returns if the bet is successful. Note: when an estimated return isn’t available, as in the case of a bet placed on a horse at SP (starting price) where the actual price is unknown when the bet is placed, ‘NOT_AVAILABLE’ will appear in the response field.
     */
    estimatedReturns: number;
    /**
     * If a free bet token is used for the bet, this element represents the value
     */
    freeBetValue?: number;
    /**
     * The unique identifier of the bet
     */
    id: string;
    legs?: PlacedBetLeg[];
    /**
     * Number of lines of bets
     */
    numLines?: number;
    /**
     * Number of selections that the bet is made of
     */
    numSelections?: number;
    /**
     * The unique identifier of the receipt for the bet
     */
    receipt?: string;
    /**
     * Whether the bet is settled
     */
    settled: boolean;
    /**
     * The bet stake, which represents the total value of the bet. For example: £ 12.34
     */
    stake: number;
    /**
     * The individual stake on each line of the bet. For example: £ 6.17
     */
    stakePerLine?: number;
    /**
     * The status of the bet. Can be one of the following: A - Active, S - suspended, C - Cashed Out
     */
    status: string;
    /**
     * The time the bet was placed
     */
    transDateTime: string;
    /**
     * The bet type code of the bet. For example: TBL (Treble)
     */
    typeCode: string;
    /**
     * The name of the bet type. For example: Double
     */
    typeName: string;
    /**
     * Actual value of the returns from this bet
     */
    winnings: number;
}
