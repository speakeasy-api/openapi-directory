import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetAdminRequestsRequest extends SpeakeasyBase {
    /**
     * The maximum number of results to return
     */
    limit?: string;
    /**
     * Only return logged requests after this date
     */
    since?: string;
}
export declare class GetAdminRequestsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
