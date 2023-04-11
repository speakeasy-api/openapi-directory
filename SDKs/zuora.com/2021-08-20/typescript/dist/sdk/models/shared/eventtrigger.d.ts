import { SpeakeasyBase } from "../../../internal/utils";
import { EventType } from "./eventtype";
/**
 * OK
 */
export declare class EventTrigger extends SpeakeasyBase {
    /**
     * The status of the trigger.
     */
    active?: boolean;
    /**
     * The base object that the trigger rule is defined upon. Should be specified in the pattern: ^[A-Z][\\w\\-]*$
     */
    baseObject?: string;
    /**
     * The JEXL expression to be evaluated against object changes. See above for more information and an example.
     */
    condition?: string;
    /**
     * The description of the trigger.
     */
    description?: string;
    eventType?: EventType;
    id?: string;
}
