import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ObjectGetRatePlanPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ObjectGetRatePlanQueryParams extends SpeakeasyBase {
    fields?: string;
}
export declare class ObjectGetRatePlanHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class ObjectGetRatePlanRequest extends SpeakeasyBase {
    pathParams: ObjectGetRatePlanPathParams;
    queryParams: ObjectGetRatePlanQueryParams;
    headers: ObjectGetRatePlanHeaders;
}
export declare class ObjectGetRatePlanResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    proxyGetRatePlan?: Record<string, any>;
    proxyNoDataResponse?: shared.ProxyNoDataResponse;
    proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;
    statusCode: number;
}
