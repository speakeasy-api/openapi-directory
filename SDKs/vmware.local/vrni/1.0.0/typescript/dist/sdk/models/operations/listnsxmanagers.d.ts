import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListNSXManagersSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class ListNSXManagersRequest extends SpeakeasyBase {
    /**
     * cursor from previous response
     */
    cursor?: string;
    /**
     * end time for query in epoch seconds
     */
    endTime?: number;
    /**
     * page size of results
     */
    size?: number;
    /**
     * start time for query in epoch seconds
     */
    startTime?: number;
}
export declare class ListNSXManagersResponse extends SpeakeasyBase {
    /**
     * Bad Request
     */
    apiError?: shared.ApiError;
    contentType: string;
    /**
     * OK
     */
    pagedListResponseWithTime?: shared.PagedListResponseWithTime;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
