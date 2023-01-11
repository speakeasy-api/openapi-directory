import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ObjectGetRatePlanChargeTierPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ObjectGetRatePlanChargeTierQueryParams extends SpeakeasyBase {
    fields?: string;
}
export declare class ObjectGetRatePlanChargeTierHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class ObjectGetRatePlanChargeTierRequest extends SpeakeasyBase {
    pathParams: ObjectGetRatePlanChargeTierPathParams;
    queryParams: ObjectGetRatePlanChargeTierQueryParams;
    headers: ObjectGetRatePlanChargeTierHeaders;
}
export declare class ObjectGetRatePlanChargeTierResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    proxyGetRatePlanChargeTier?: shared.ProxyGetRatePlanChargeTier;
    proxyNoDataResponse?: shared.ProxyNoDataResponse;
    proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;
    statusCode: number;
}
