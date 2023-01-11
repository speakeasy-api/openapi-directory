import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSubscriptionTermInfoPathParams extends SpeakeasyBase {
    subscriptionNumber: string;
}
export declare class GetSubscriptionTermInfoQueryParams extends SpeakeasyBase {
    page?: number;
    pageSize?: number;
    version?: number;
}
export declare class GetSubscriptionTermInfoHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetSubscriptionTermInfoRequest extends SpeakeasyBase {
    pathParams: GetSubscriptionTermInfoPathParams;
    queryParams: GetSubscriptionTermInfoQueryParams;
    headers: GetSubscriptionTermInfoHeaders;
}
export declare class GetSubscriptionTermInfoResponse extends SpeakeasyBase {
    contentType: string;
    getSubscriptionTermInfoResponseType?: shared.GetSubscriptionTermInfoResponseType;
    headers: Record<string, string[]>;
    statusCode: number;
}
