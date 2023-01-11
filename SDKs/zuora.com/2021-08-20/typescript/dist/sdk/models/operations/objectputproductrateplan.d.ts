import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ObjectPutProductRatePlanPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ObjectPutProductRatePlanQueryParams extends SpeakeasyBase {
    rejectUnknownFields?: boolean;
}
export declare class ObjectPutProductRatePlanHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class ObjectPutProductRatePlanRequest extends SpeakeasyBase {
    pathParams: ObjectPutProductRatePlanPathParams;
    queryParams: ObjectPutProductRatePlanQueryParams;
    headers: ObjectPutProductRatePlanHeaders;
    request: Record<string, any>;
}
export declare class ObjectPutProductRatePlanResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    proxyCreateOrModifyResponse?: shared.ProxyCreateOrModifyResponse;
    proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;
    statusCode: number;
}
