import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ObjectPutProductRatePlanChargePathParams extends SpeakeasyBase {
    id: string;
}
export declare class ObjectPutProductRatePlanChargeQueryParams extends SpeakeasyBase {
    rejectUnknownFields?: boolean;
}
export declare class ObjectPutProductRatePlanChargeHeaders extends SpeakeasyBase {
    xZuoraWSDLVersion?: string;
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class ObjectPutProductRatePlanChargeRequest extends SpeakeasyBase {
    pathParams: ObjectPutProductRatePlanChargePathParams;
    queryParams: ObjectPutProductRatePlanChargeQueryParams;
    headers: ObjectPutProductRatePlanChargeHeaders;
    request: Record<string, any>;
}
export declare class ObjectPutProductRatePlanChargeResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    proxyCreateOrModifyResponse?: shared.ProxyCreateOrModifyResponse;
    proxyNoDataResponse?: shared.ProxyNoDataResponse;
    proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;
    statusCode: number;
}
