import { SpeakeasyBase } from "../../../internal/utils";
import { EventType } from "./eventtype";
export declare class PostEventTriggerRequest extends SpeakeasyBase {
    active: boolean;
    baseObject: string;
    condition: string;
    description?: string;
    eventType: EventType;
}
