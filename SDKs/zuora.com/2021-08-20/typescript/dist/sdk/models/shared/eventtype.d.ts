import { SpeakeasyBase } from "../../../internal/utils";
export declare class EventType extends SpeakeasyBase {
    /**
     * The description of the event type.
     */
    description?: string;
    /**
     * The display name for the event type.
     */
    displayName: string;
    /**
     * The name of the event. Should be unique, contain no space, and be in the pattern: ^[A-Za-z]{1,}[\\w\\-]*$
     */
    name: string;
}
