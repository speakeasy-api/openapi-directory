import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ObjectGetProductRatePlanChargeTierPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ObjectGetProductRatePlanChargeTierQueryParams extends SpeakeasyBase {
    fields?: string;
}
export declare class ObjectGetProductRatePlanChargeTierHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class ObjectGetProductRatePlanChargeTierRequest extends SpeakeasyBase {
    pathParams: ObjectGetProductRatePlanChargeTierPathParams;
    queryParams: ObjectGetProductRatePlanChargeTierQueryParams;
    headers: ObjectGetProductRatePlanChargeTierHeaders;
}
export declare class ObjectGetProductRatePlanChargeTierResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    proxyGetProductRatePlanChargeTier?: shared.ProxyGetProductRatePlanChargeTier;
    proxyNoDataResponse?: shared.ProxyNoDataResponse;
    proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;
    statusCode: number;
}
