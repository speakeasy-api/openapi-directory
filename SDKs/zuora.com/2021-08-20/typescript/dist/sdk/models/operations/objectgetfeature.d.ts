import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ObjectGetFeaturePathParams extends SpeakeasyBase {
    id: string;
}
export declare class ObjectGetFeatureQueryParams extends SpeakeasyBase {
    fields?: string;
}
export declare class ObjectGetFeatureHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class ObjectGetFeatureRequest extends SpeakeasyBase {
    pathParams: ObjectGetFeaturePathParams;
    queryParams: ObjectGetFeatureQueryParams;
    headers: ObjectGetFeatureHeaders;
}
export declare class ObjectGetFeatureResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    proxyGetFeature?: Record<string, any>;
    proxyNoDataResponse?: shared.ProxyNoDataResponse;
    proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;
    statusCode: number;
}
