import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRampMetricsBySubscriptionKeyPathParams extends SpeakeasyBase {
    subscriptionKey: string;
}
export declare class GetRampMetricsBySubscriptionKeyHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetRampMetricsBySubscriptionKeyRequest extends SpeakeasyBase {
    pathParams: GetRampMetricsBySubscriptionKeyPathParams;
    headers: GetRampMetricsBySubscriptionKeyHeaders;
}
export declare class GetRampMetricsBySubscriptionKeyResponse extends SpeakeasyBase {
    contentType: string;
    getRampMetricsBySubscriptionKeyResponseType?: shared.GetRampMetricsBySubscriptionKeyResponseType;
    headers: Record<string, string[]>;
    statusCode: number;
}
