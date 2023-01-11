import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetSubscriptionsByKeyPathParams extends SpeakeasyBase {
    subscriptionKey: string;
}
export declare class GetSubscriptionsByKeyQueryParams extends SpeakeasyBase {
    chargeDetail?: string;
}
export declare class GetSubscriptionsByKeyHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetSubscriptionsByKeyRequest extends SpeakeasyBase {
    pathParams: GetSubscriptionsByKeyPathParams;
    queryParams: GetSubscriptionsByKeyQueryParams;
    headers: GetSubscriptionsByKeyHeaders;
}
export declare class GetSubscriptionsByKeyResponse extends SpeakeasyBase {
    contentType: string;
    getSubscriptionTypeWithSuccess?: Record<string, any>;
    headers: Record<string, string[]>;
    statusCode: number;
}
