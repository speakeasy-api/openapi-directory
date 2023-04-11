import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetFeedConnectionSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class GetFeedConnectionRequest extends SpeakeasyBase {
    /**
     * Xero identifier for Tenant
     */
    xeroTenantId: string;
    /**
     * Unique identifier for retrieving single object
     */
    id: string;
}
export declare class GetFeedConnectionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * success returns a FeedConnection object matching the id in response
     */
    feedConnection?: shared.FeedConnection;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
