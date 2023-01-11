import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ObjectGetProductRatePlanPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ObjectGetProductRatePlanQueryParams extends SpeakeasyBase {
    fields?: string;
}
export declare class ObjectGetProductRatePlanHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class ObjectGetProductRatePlanRequest extends SpeakeasyBase {
    pathParams: ObjectGetProductRatePlanPathParams;
    queryParams: ObjectGetProductRatePlanQueryParams;
    headers: ObjectGetProductRatePlanHeaders;
}
export declare class ObjectGetProductRatePlanResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    proxyGetProductRatePlan?: Record<string, any>;
    proxyNoDataResponse?: shared.ProxyNoDataResponse;
    proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;
    statusCode: number;
}
