import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListApplicationsSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class ListApplicationsRequest extends SpeakeasyBase {
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
export declare class ListApplicationsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    pagedListResponse?: shared.PagedListResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
