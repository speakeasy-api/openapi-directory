import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRampsBySubscriptionKeyPathParams extends SpeakeasyBase {
    subscriptionKey: string;
}
export declare class GetRampsBySubscriptionKeyHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetRampsBySubscriptionKeyRequest extends SpeakeasyBase {
    pathParams: GetRampsBySubscriptionKeyPathParams;
    headers: GetRampsBySubscriptionKeyHeaders;
}
export declare class GetRampsBySubscriptionKeyResponse extends SpeakeasyBase {
    contentType: string;
    getRampsBySubscriptionKeyResponseType?: shared.GetRampsBySubscriptionKeyResponseType;
    headers: Record<string, string[]>;
    statusCode: number;
}
