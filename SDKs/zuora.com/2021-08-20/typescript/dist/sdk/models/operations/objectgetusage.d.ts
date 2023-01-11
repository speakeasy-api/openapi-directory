import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ObjectGetUsagePathParams extends SpeakeasyBase {
    id: string;
}
export declare class ObjectGetUsageQueryParams extends SpeakeasyBase {
    fields?: string;
}
export declare class ObjectGetUsageHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class ObjectGetUsageRequest extends SpeakeasyBase {
    pathParams: ObjectGetUsagePathParams;
    queryParams: ObjectGetUsageQueryParams;
    headers: ObjectGetUsageHeaders;
}
export declare class ObjectGetUsageResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    proxyGetUsage?: Record<string, any>;
    proxyNoDataResponse?: shared.ProxyNoDataResponse;
    proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;
    statusCode: number;
}
