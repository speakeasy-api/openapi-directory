import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListSecurityGroupsSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class ListSecurityGroupsRequest extends SpeakeasyBase {
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
export declare class ListSecurityGroupsResponse extends SpeakeasyBase {
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
