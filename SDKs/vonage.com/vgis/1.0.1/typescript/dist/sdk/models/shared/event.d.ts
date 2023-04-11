import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Direction of the event
 */
export declare enum EventDirectionEnum {
    Inbound = "INBOUND",
    Outbound = "OUTBOUND"
}
/**
 * Status of the event
 */
export declare enum EventStateEnum {
    Initializing = "INITIALIZING",
    Ringing = "RINGING",
    Active = "ACTIVE",
    Held = "HELD",
    RemoteHeld = "REMOTE_HELD",
    Detached = "DETACHED",
    Rejected = "REJECTED",
    Cancelled = "CANCELLED",
    Answered = "ANSWERED",
    Missed = "MISSED"
}
/**
 * Record type
 */
export declare enum EventTypeEnum {
    Call = "CALL"
}
export declare class Event extends SpeakeasyBase {
    /**
     * Unique identifier of the account
     */
    accountId: number;
    /**
     * Time to answer the event
     */
    answerTime?: Date;
    /**
     * Remote caller ID
     */
    callerId?: string;
    /**
     * Direction of the event
     */
    direction: EventDirectionEnum;
    /**
     * Duration of the call in milliseconds
     */
    duration?: number;
    /**
     * End time of the event
     */
    endTime?: Date;
    /**
     * External identifier of the event
     */
    externalId?: string;
    /**
     * Unique identifier of the event
     */
    id: number;
    /**
     * Unique identifier of the account
     */
    phoneNumber: string;
    smsData?: string;
    /**
     * Start time of the event
     */
    startTime: Date;
    /**
     * Status of the event
     */
    state: EventStateEnum;
    /**
     * Record type
     */
    type: EventTypeEnum;
    /**
     * Unique identifier of communications provider
     */
    uciId: number;
    /**
     * Unique identifier of the user
     */
    userId: number;
}
