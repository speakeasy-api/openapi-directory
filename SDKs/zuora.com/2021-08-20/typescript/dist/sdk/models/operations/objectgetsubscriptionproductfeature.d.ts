import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ObjectGetSubscriptionProductFeaturePathParams extends SpeakeasyBase {
    id: string;
}
export declare class ObjectGetSubscriptionProductFeatureQueryParams extends SpeakeasyBase {
    fields?: string;
}
export declare class ObjectGetSubscriptionProductFeatureHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class ObjectGetSubscriptionProductFeatureRequest extends SpeakeasyBase {
    pathParams: ObjectGetSubscriptionProductFeaturePathParams;
    queryParams: ObjectGetSubscriptionProductFeatureQueryParams;
    headers: ObjectGetSubscriptionProductFeatureHeaders;
}
export declare class ObjectGetSubscriptionProductFeatureResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    proxyGetSubscriptionProductFeature?: Record<string, any>;
    proxyNoDataResponse?: shared.ProxyNoDataResponse;
    proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;
    statusCode: number;
}
