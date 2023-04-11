import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListVmsSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class ListVmsRequest extends SpeakeasyBase {
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
export declare class ListVmsResponse extends SpeakeasyBase {
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
