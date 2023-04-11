import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SearchEntitiesSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class SearchEntitiesResponse extends SpeakeasyBase {
    /**
     * Bad Request
     */
    apiError?: shared.ApiError;
    contentType: string;
    /**
     * Success
     */
    pagedListResponseWithTime?: shared.PagedListResponseWithTime;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
