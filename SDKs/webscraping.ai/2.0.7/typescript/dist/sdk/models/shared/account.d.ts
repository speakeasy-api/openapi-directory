import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Success
 */
export declare class Account extends SpeakeasyBase {
    /**
     * Remaining API calls quota
     */
    remainingApiCalls?: number;
    /**
     * Remaining concurrent requests
     */
    remainingConcurrency?: number;
    /**
     * Next billing cycle start time (UNIX timestamp)
     */
    resetsAt?: number;
}
