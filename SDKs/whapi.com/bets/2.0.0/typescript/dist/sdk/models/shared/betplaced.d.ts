import { SpeakeasyBase } from "../../../internal/utils";
export declare class BetPlaced extends SpeakeasyBase {
    /**
     * The bet id
     */
    id?: string;
    /**
     * The number of lines the bet consists of
     */
    numLines?: number;
    /**
     * Number of the bet if this is part of a multiple bet
     */
    number?: number;
    /**
     * The time the bet was placed. For example: 2013-01-30TT13:34:20. The value of this element can be replaced with the current timestamp if it was missing.
     */
    placedDateTime?: string;
    /**
     * The unique ID of the bet receipt
     */
    receipt: string;
    /**
     * The total amount staked on the bet
     */
    totalStake?: number;
}
