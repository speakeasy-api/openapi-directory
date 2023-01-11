import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ObjectGetProductFeaturePathParams extends SpeakeasyBase {
    id: string;
}
export declare class ObjectGetProductFeatureQueryParams extends SpeakeasyBase {
    fields?: string;
}
export declare class ObjectGetProductFeatureHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class ObjectGetProductFeatureRequest extends SpeakeasyBase {
    pathParams: ObjectGetProductFeaturePathParams;
    queryParams: ObjectGetProductFeatureQueryParams;
    headers: ObjectGetProductFeatureHeaders;
}
export declare class ObjectGetProductFeatureResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    proxyGetProductFeature?: Record<string, any>;
    proxyNoDataResponse?: shared.ProxyNoDataResponse;
    proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;
    statusCode: number;
}
