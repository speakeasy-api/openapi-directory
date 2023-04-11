import { SpeakeasyBase } from "../../../internal/utils";
export declare class BetDelayed extends SpeakeasyBase {
    /**
     * The delay time period of the bet in seconds. The resubmission of the bet has to wait for the length of time (in seconds) returned in the delayPeriod before submitting the second request.
     */
    delayPeriodSeconds: number;
    /**
     * The unique identifier of the delayed bet. After the initial response is received, containing the delayPeriod and the delayBetId, the request is then resubmitted using the same delayBetId token that came in that initial response. Check the example below to see how to resend a delayed bet payload.
     */
    delayedBetId: string;
    /**
     * The number of the bet
     */
    id: string;
    /**
     * Number of the bet if this is part of a multiple bet
     */
    number?: number;
}
