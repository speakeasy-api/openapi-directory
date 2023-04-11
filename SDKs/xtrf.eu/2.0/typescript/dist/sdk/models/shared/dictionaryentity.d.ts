import { SpeakeasyBase } from "../../../internal/utils";
import { EventsQueue } from "./eventsqueue";
import { Identifier } from "./identifier";
/**
 * Success
 */
export declare class DictionaryEntity extends SpeakeasyBase {
    active?: boolean;
    andClearEventsQueue?: EventsQueue;
    auditDisplayName?: string;
    auditPath?: string;
    classNameKey?: string;
    classSimpleName?: string;
    compoundId?: string;
    defaultEntity?: boolean;
    displayName?: string;
    entityMarkedAsNotSupposedToBePersisted?: boolean;
    eventsQueueReadyToBeDispatched?: boolean;
    id?: number;
    identifier?: Identifier;
    internalDescription?: string;
    lastModificationDate?: Date;
    name: string;
    packedCompoundId?: string;
    preferedEntity: boolean;
    preferred?: boolean;
    version?: number;
}
