import { SpeakeasyBase } from "../../../internal/utils";
import { Bet } from "./bet";
/**
 * Complex bet request body
 */
export declare class ComplexBetRequestBody extends SpeakeasyBase {
    /**
     * A collection of bets
     */
    bets?: Bet[];
}
