import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteFeedConnectionsSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class DeleteFeedConnectionsRequest extends SpeakeasyBase {
    /**
     * Feed Connections array object in the body
     */
    feedConnections: shared.FeedConnections;
    /**
     * Xero identifier for Tenant
     */
    xeroTenantId: string;
}
export declare class DeleteFeedConnectionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success response for deleted feed connection
     */
    feedConnections?: shared.FeedConnections;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
