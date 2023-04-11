import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPayRunsSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class GetPayRunsRequest extends SpeakeasyBase {
    /**
     * Only records created or modified since this timestamp will be returned
     */
    ifModifiedSince?: string;
    /**
     * Xero identifier for Tenant
     */
    xeroTenantId: string;
    /**
     * Order by an any element
     */
    order?: string;
    /**
     * e.g. page=1 – Up to 100 PayRuns will be returned in a single API call
     */
    page?: number;
    /**
     * Filter by an any element
     */
    where?: string;
}
export declare class GetPayRunsResponse extends SpeakeasyBase {
    /**
     * validation error for a bad request
     */
    apiException?: shared.APIException;
    contentType: string;
    /**
     * search results matching criteria
     */
    payRuns?: shared.PayRuns;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
