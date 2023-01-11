import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ObjectGetProductRatePlanChargePathParams extends SpeakeasyBase {
    id: string;
}
export declare class ObjectGetProductRatePlanChargeQueryParams extends SpeakeasyBase {
    fields?: string;
}
export declare class ObjectGetProductRatePlanChargeHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class ObjectGetProductRatePlanChargeRequest extends SpeakeasyBase {
    pathParams: ObjectGetProductRatePlanChargePathParams;
    queryParams: ObjectGetProductRatePlanChargeQueryParams;
    headers: ObjectGetProductRatePlanChargeHeaders;
}
export declare class ObjectGetProductRatePlanChargeResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    proxyGetProductRatePlanCharge?: Record<string, any>;
    proxyNoDataResponse?: shared.ProxyNoDataResponse;
    proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;
    statusCode: number;
}
