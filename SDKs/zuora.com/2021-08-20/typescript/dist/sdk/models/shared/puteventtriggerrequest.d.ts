import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of events to be triggered.
**/
export declare class PutEventTriggerRequestEventType extends SpeakeasyBase {
    description?: string;
    displayName?: string;
}
export declare class PutEventTriggerRequest extends SpeakeasyBase {
    active?: boolean;
    condition?: string;
    description?: string;
    eventType?: PutEventTriggerRequestEventType;
}
