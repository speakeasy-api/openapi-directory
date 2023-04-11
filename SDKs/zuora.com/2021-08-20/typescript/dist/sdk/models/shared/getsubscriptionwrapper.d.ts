import { SpeakeasyBase } from "../../../internal/utils";
import { GETSubscriptionType } from "./getsubscriptiontype";
export declare class GETSubscriptionWrapper extends SpeakeasyBase {
    /**
     * URL to retrieve the next page of the response if it exists; otherwise absent.
     *
     * @remarks
     *
     */
    nextPage?: string;
    /**
     * Array of subscriptions.
     *
     * @remarks
     *
     */
    subscriptions?: GETSubscriptionType[];
    /**
     * Returns `true` if the request was processed successfully.
     *
     * @remarks
     *
     */
    success?: boolean;
}
