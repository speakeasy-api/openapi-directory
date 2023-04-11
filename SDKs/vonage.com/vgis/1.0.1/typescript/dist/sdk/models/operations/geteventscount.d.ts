import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Filter by event direction
 */
export declare enum GetEventsCountDirectionEnum {
    Inbound = "INBOUND",
    Outbound = "OUTBOUND"
}
/**
 * Filter events by state
 */
export declare enum GetEventsCountStatesEnum {
    Initializing = "INITIALIZING",
    Ringing = "RINGING",
    Active = "ACTIVE",
    Held = "HELD",
    RemoteHeld = "REMOTE_HELD"
}
export declare class GetEventsCountRequest extends SpeakeasyBase {
    /**
     * Filter by event direction
     */
    direction?: GetEventsCountDirectionEnum;
    /**
     * Return events that occurred after this point in time
     */
    fromDate?: number;
    /**
     * Filter events by state
     */
    states?: GetEventsCountStatesEnum;
    /**
     * Return events that occurred before this point in time
     */
    toDate?: number;
}
export declare class GetEventsCountResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request: The client should not repeat the request without modifications
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * Successful
     */
    eventsCount?: shared.EventsCount;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
