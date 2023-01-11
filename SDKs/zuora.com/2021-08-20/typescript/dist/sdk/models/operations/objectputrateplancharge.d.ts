import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ObjectPutRatePlanChargePathParams extends SpeakeasyBase {
    id: string;
}
export declare class ObjectPutRatePlanChargeQueryParams extends SpeakeasyBase {
    rejectUnknownFields?: boolean;
}
export declare class ObjectPutRatePlanChargeHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class ObjectPutRatePlanChargeRequest extends SpeakeasyBase {
    pathParams: ObjectPutRatePlanChargePathParams;
    queryParams: ObjectPutRatePlanChargeQueryParams;
    headers: ObjectPutRatePlanChargeHeaders;
    request: Record<string, any>;
}
export declare class ObjectPutRatePlanChargeResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    proxyCreateOrModifyResponse?: shared.ProxyCreateOrModifyResponse;
    proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;
    statusCode: number;
}
