import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetFeedConnectionsSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class GetFeedConnectionsRequest extends SpeakeasyBase {
    /**
     * Xero identifier for Tenant
     */
    xeroTenantId: string;
    /**
     * Page number which specifies the set of records to retrieve. By default the number of the records per set is 10. Example - https://api.xero.com/bankfeeds.xro/1.0/FeedConnections?page=1 to get the second set of the records. When page value is not a number or a negative number, by default, the first set of records is returned.
     */
    page?: number;
    /**
     * Page size which specifies how many records per page will be returned (default 10). Example - https://api.xero.com/bankfeeds.xro/1.0/FeedConnections?pageSize=100 to specify page size of 100.
     */
    pageSize?: number;
}
export declare class GetFeedConnectionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * search results matching criteria returned with pagination and items array
     */
    feedConnections?: shared.FeedConnections;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
