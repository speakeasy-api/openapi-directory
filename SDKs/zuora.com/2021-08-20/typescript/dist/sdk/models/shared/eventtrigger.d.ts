import { SpeakeasyBase } from "../../../internal/utils";
import { EventType } from "./eventtype";
export declare class EventTrigger extends SpeakeasyBase {
    active?: boolean;
    baseObject?: string;
    condition?: string;
    description?: string;
    eventType?: EventType;
    id?: string;
}
