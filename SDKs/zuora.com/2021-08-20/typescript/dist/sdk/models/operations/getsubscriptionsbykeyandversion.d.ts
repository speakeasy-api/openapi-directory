import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetSubscriptionsByKeyAndVersionPathParams extends SpeakeasyBase {
    subscriptionKey: string;
    version: string;
}
export declare class GetSubscriptionsByKeyAndVersionQueryParams extends SpeakeasyBase {
    chargeDetail?: string;
}
export declare class GetSubscriptionsByKeyAndVersionHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetSubscriptionsByKeyAndVersionRequest extends SpeakeasyBase {
    pathParams: GetSubscriptionsByKeyAndVersionPathParams;
    queryParams: GetSubscriptionsByKeyAndVersionQueryParams;
    headers: GetSubscriptionsByKeyAndVersionHeaders;
}
export declare class GetSubscriptionsByKeyAndVersionResponse extends SpeakeasyBase {
    contentType: string;
    getSubscriptionTypeWithSuccess?: Record<string, any>;
    headers: Record<string, string[]>;
    statusCode: number;
}
