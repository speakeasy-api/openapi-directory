import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateFeedConnectionsSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class CreateFeedConnectionsRequest extends SpeakeasyBase {
    /**
     * Feed Connection(s) array object in the body
     */
    feedConnections: shared.FeedConnections;
    /**
     * Xero identifier for Tenant
     */
    xeroTenantId: string;
}
export declare class CreateFeedConnectionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * failed to create new feed connection(s)response
     */
    error?: shared.ErrorT;
    /**
     * success new feed connection(s)response
     */
    feedConnections?: shared.FeedConnections;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
