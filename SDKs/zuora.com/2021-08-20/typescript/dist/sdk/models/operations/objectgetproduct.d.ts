import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ObjectGetProductPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ObjectGetProductQueryParams extends SpeakeasyBase {
    fields?: string;
}
export declare class ObjectGetProductHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class ObjectGetProductRequest extends SpeakeasyBase {
    pathParams: ObjectGetProductPathParams;
    queryParams: ObjectGetProductQueryParams;
    headers: ObjectGetProductHeaders;
}
export declare class ObjectGetProductResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    proxyGetProduct?: Record<string, any>;
    proxyNoDataResponse?: shared.ProxyNoDataResponse;
    proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;
    statusCode: number;
}
