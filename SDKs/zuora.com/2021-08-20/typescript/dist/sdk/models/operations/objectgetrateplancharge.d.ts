import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ObjectGetRatePlanChargePathParams extends SpeakeasyBase {
    id: string;
}
export declare class ObjectGetRatePlanChargeQueryParams extends SpeakeasyBase {
    fields?: string;
}
export declare class ObjectGetRatePlanChargeHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class ObjectGetRatePlanChargeRequest extends SpeakeasyBase {
    pathParams: ObjectGetRatePlanChargePathParams;
    queryParams: ObjectGetRatePlanChargeQueryParams;
    headers: ObjectGetRatePlanChargeHeaders;
}
export declare class ObjectGetRatePlanChargeResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    proxyGetRatePlanCharge?: Record<string, any>;
    proxyNoDataResponse?: shared.ProxyNoDataResponse;
    proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;
    statusCode: number;
}
