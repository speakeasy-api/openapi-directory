import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Returns subscription Id.
 */
export declare class SubscriptionDTO extends SpeakeasyBase {
    /**
     * additional fields which should be embedded in the event
     */
    embed?: string;
    /**
     * event to which you want to subscribe
     */
    event?: string;
    /**
     * filter expression in the form 'attribute=value'
     */
    filter?: string;
    /**
     * url that will be invoked by XTRF on event
     */
    url?: string;
}
