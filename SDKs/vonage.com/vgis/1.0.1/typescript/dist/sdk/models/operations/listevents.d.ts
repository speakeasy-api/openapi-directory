import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Filter by event direction
 */
export declare enum ListEventsDirectionEnum {
    Inbound = "INBOUND",
    Outbound = "OUTBOUND"
}
/**
 * Sort in either ascending or descending order'
 */
export declare enum ListEventsOrderEnum {
    Desc = "DESC",
    Asc = "ASC"
}
/**
 * Filter events by state
 */
export declare enum ListEventsStatesEnum {
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
export declare enum ListEventsTypesEnum {
    Call = "CALL"
}
export declare class ListEventsRequest extends SpeakeasyBase {
    /**
     * Filter by event direction
     */
    direction?: ListEventsDirectionEnum;
    /**
     * Return events that occurred after this point in time
     */
    fromDate?: number;
    /**
     * Page number of events to return
     */
    offset?: number;
    /**
     * Sort in either ascending or descending order'
     */
    order?: ListEventsOrderEnum;
    /**
     * Return this amount of events in the response
     */
    size?: number;
    /**
     * Sort events by property
     */
    sort?: string;
    /**
     * Filter events by state
     */
    states?: ListEventsStatesEnum;
    /**
     * Return events that occurred before this point in time
     */
    toDate?: number;
    /**
     * Record type
     */
    types?: ListEventsTypesEnum;
}
export declare class ListEventsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request: The client should not repeat the request without modifications
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * Successful
     */
    events?: shared.Event[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
