import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ObjectPutProductRatePlanChargeTierPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ObjectPutProductRatePlanChargeTierQueryParams extends SpeakeasyBase {
    rejectUnknownFields?: boolean;
}
export declare class ObjectPutProductRatePlanChargeTierHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class ObjectPutProductRatePlanChargeTierRequest extends SpeakeasyBase {
    pathParams: ObjectPutProductRatePlanChargeTierPathParams;
    queryParams: ObjectPutProductRatePlanChargeTierQueryParams;
    headers: ObjectPutProductRatePlanChargeTierHeaders;
    request: shared.ProxyModifyProductRatePlanChargeTier;
}
export declare class ObjectPutProductRatePlanChargeTierResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    proxyCreateOrModifyResponse?: shared.ProxyCreateOrModifyResponse;
    proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;
    statusCode: number;
}
