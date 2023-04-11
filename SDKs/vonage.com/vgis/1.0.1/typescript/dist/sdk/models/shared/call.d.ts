import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Direction of the call
 */
export declare enum CallDirectionEnum {
    Inbound = "INBOUND",
    Outbound = "OUTBOUND"
}
/**
 * Status of the call
 */
export declare enum CallStateEnum {
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
export declare enum CallTypeEnum {
    Call = "CALL"
}
/**
 * Successful
 */
export declare class Call extends SpeakeasyBase {
    /**
     * Unique identifier of the account
     */
    accountId: number;
    /**
     * Time to answer the call
     */
    answerTime?: Date;
    /**
     * Remote caller ID
     */
    callerId?: string;
    /**
     * Direction of the call
     */
    direction: CallDirectionEnum;
    /**
     * Duration of the call in milliseconds
     */
    duration: number;
    /**
     * End time of the call
     */
    endTime?: Date;
    /**
     * External identifier of the call
     */
    externalId?: string;
    /**
     * Unique identifier of the call
     */
    id: number;
    /**
     * Unique identifier of the account
     */
    phoneNumber: string;
    /**
     * Start time of the call
     */
    startTime: Date;
    /**
     * Status of the call
     */
    state: CallStateEnum;
    /**
     * Record type
     */
    type: CallTypeEnum;
    /**
     * Unique identifier of communications provider
     */
    uciId: number;
    /**
     * Unique identifier of the user
     */
    userId: number;
}
