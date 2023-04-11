import { SpeakeasyBase } from "../../../internal/utils";
import { Leg } from "./leg";
export declare class Bet extends SpeakeasyBase {
    /**
     * The delayed bet identifier
     */
    delayedBetId?: string;
    /**
     * The ID number of the free bet token if used in conjunction with this bet
     */
    freeBetId?: string;
    legs: Leg[];
    /**
     * The bet number
     */
    number: number;
    /**
     * The amount of the stake placed on the bet
     */
    stake: number;
    /**
     * The bet type code of the bet. For example: TBL (Treble)
     */
    typeCode: string;
}
