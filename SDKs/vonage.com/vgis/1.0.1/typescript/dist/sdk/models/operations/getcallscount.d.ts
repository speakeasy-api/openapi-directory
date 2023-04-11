import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Filter by call direction. For multiple criteria, seperate values by a comma.
 */
export declare enum GetCallsCountDirectionEnum {
    Inbound = "INBOUND",
    Outbound = "OUTBOUND"
}
/**
 * Filter calls by state. For multiple criteria, seperate values by a comma.
 */
export declare enum GetCallsCountStatesEnum {
    Initializing = "INITIALIZING",
    Ringing = "RINGING",
    Active = "ACTIVE",
    Held = "HELD",
    RemoteHeld = "REMOTE_HELD"
}
export declare class GetCallsCountRequest extends SpeakeasyBase {
    /**
     * Filter by call direction. For multiple criteria, seperate values by a comma.
     */
    direction?: GetCallsCountDirectionEnum;
    /**
     * Return calls that occurred after this point in time
     */
    fromDate?: number;
    /**
     * Filter calls by state. For multiple criteria, seperate values by a comma.
     */
    states?: GetCallsCountStatesEnum;
    /**
     * Return calls that occurred before this point in time
     */
    toDate?: number;
}
export declare class GetCallsCountResponse extends SpeakeasyBase {
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
