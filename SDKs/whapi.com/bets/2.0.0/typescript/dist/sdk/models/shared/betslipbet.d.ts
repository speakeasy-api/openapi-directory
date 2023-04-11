import { SpeakeasyBase } from "../../../internal/utils";
import { Betslipleg } from "./betslipleg";
import { FreeBetDetail } from "./freebetdetail";
export declare class Betslipbet extends SpeakeasyBase {
    /**
     * The total aggregated odds, as a decimal, of the multiple bet placed
     */
    betMultiplier?: number;
    /**
     * Free bets that can be used with this bet
     */
    freeBets?: FreeBetDetail[];
    legs: Betslipleg[];
    /**
     * Maximum stake allowable on the bet. For example: 2500.00 (GBP)
     */
    maxStake?: number;
    /**
     * Minumum stake allowable on the bet. For example: 0.05 (GBP)
     */
    minStake?: number;
    /**
     * The number of lines (selections) of a bet
     */
    numLines?: number;
    /**
     * The bet number
     */
    number: number;
    /**
     * The bet type code of the bet. For example: TBL (Treble)
     */
    typeCode: string;
    /**
     * The TypeCode of the bet. For example: TBL (Treble)
     */
    typeName?: string;
}
