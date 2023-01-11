import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ObjectGetSubscriptionPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ObjectGetSubscriptionQueryParams extends SpeakeasyBase {
    fields?: string;
}
export declare class ObjectGetSubscriptionHeaders extends SpeakeasyBase {
    xZuoraWSDLVersion?: string;
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class ObjectGetSubscriptionRequest extends SpeakeasyBase {
    pathParams: ObjectGetSubscriptionPathParams;
    queryParams: ObjectGetSubscriptionQueryParams;
    headers: ObjectGetSubscriptionHeaders;
}
export declare class ObjectGetSubscriptionResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    proxyGetSubscription?: Record<string, any>;
    proxyNoDataResponse?: shared.ProxyNoDataResponse;
    proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;
    statusCode: number;
}
