import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of events to be triggered.
 */
export declare class PutEventTriggerRequestEventType extends SpeakeasyBase {
    /**
     * The description for the event type.
     */
    description?: string;
    /**
     * The display name for the event type.
     */
    displayName?: string;
}
export declare class PutEventTriggerRequest extends SpeakeasyBase {
    /**
     * The status of the trigger.
     */
    active?: boolean;
    /**
     * The JEXL expression to be evaluated against object changes. See above for more information and an example.
     */
    condition?: string;
    /**
     * The description of the trigger.
     */
    description?: string;
    /**
     * The type of events to be triggered.
     */
    eventType?: PutEventTriggerRequestEventType;
}
