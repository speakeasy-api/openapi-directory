import { SpeakeasyBase } from "../../../internal/utils";
export declare class ActiveSubscriptionDTO extends SpeakeasyBase {
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
     * subscription identifier
     */
    subscriptionId?: string;
    /**
     * url that will be invoked by XTRF on event
     */
    url?: string;
}
