import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCallLogsSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
/**
 * Filter by call direction.
 */
export declare enum GetCallLogsDirectionEnum {
    Inbound = "Inbound",
    Outbound = "Outbound"
}
export declare class GetCallLogsRequest extends SpeakeasyBase {
    /**
     * The Vonage Business Cloud account ID
     */
    accountId: string;
    /**
     * Filter by destination user
     */
    destinationUser?: string;
    /**
     * Filter by call direction.
     */
    direction?: GetCallLogsDirectionEnum;
    /**
     * Filter records by end date (greater equal or equal to)
     */
    endGte?: string;
    /**
     * Filter records by end date (less equal or equal to)
     */
    endLte?: string;
    /**
     * Filter by source number
     */
    from?: string;
    /**
     * Current page number
     */
    page: number;
    /**
     * Number of records per page
     */
    pageSize: number;
    /**
     * Filter by source user
     */
    sourceUser?: string;
    /**
     * Filter records by start date (greater equal or equal to)
     */
    startGte: string;
    /**
     * Filter records by start date (less equal or equal to)
     */
    startLte: string;
    /**
     * Filter by called number
     */
    to?: string;
}
export declare class GetCallLogsResponse extends SpeakeasyBase {
    /**
     * Success
     */
    callLogsHalResponse?: shared.CallLogsHalResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Invalid parameters given
     */
    validationErrorsResponse?: shared.ValidationErrorsResponse;
}
