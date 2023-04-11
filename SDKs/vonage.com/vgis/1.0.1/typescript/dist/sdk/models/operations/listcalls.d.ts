import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Filter by call direction. For multiple criteria, seperate values by a comma.
 */
export declare enum ListCallsDirectionEnum {
    Inbound = "INBOUND",
    Outbound = "OUTBOUND"
}
/**
 * Sort in either ascending or descending order
 */
export declare enum ListCallsOrderEnum {
    Desc = "DESC",
    Asc = "ASC"
}
/**
 * Filter calls by state. For multiple criteria, seperate values by a comma.
 */
export declare enum ListCallsStatesEnum {
    Initializing = "INITIALIZING",
    Ringing = "RINGING",
    Active = "ACTIVE",
    Held = "HELD",
    RemoteHeld = "REMOTE_HELD"
}
export declare class ListCallsRequest extends SpeakeasyBase {
    /**
     * Filter by call direction. For multiple criteria, seperate values by a comma.
     */
    direction?: ListCallsDirectionEnum;
    /**
     * Return calls that occurred after this point in time
     */
    fromDate?: number;
    /**
     * Page number of calls to return
     */
    offset?: number;
    /**
     * Sort in either ascending or descending order
     */
    order?: ListCallsOrderEnum;
    /**
     * Return this amount of calls in the response
     */
    size?: number;
    /**
     * Sort calls by property
     */
    sort?: string;
    /**
     * Filter calls by state. For multiple criteria, seperate values by a comma.
     */
    states?: ListCallsStatesEnum;
    /**
     * Return calls that occurred before this point in time
     */
    toDate?: number;
}
export declare class ListCallsResponse extends SpeakeasyBase {
    /**
     * Successful
     */
    calls?: shared.Call[];
    contentType: string;
    /**
     * Bad Request: The client should not repeat the request without modifications
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
