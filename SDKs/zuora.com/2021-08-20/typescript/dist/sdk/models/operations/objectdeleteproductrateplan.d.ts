import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ObjectDeleteProductRatePlanPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ObjectDeleteProductRatePlanHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class ObjectDeleteProductRatePlanRequest extends SpeakeasyBase {
    pathParams: ObjectDeleteProductRatePlanPathParams;
    headers: ObjectDeleteProductRatePlanHeaders;
}
export declare class ObjectDeleteProductRatePlanResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    proxyDeleteResponse?: shared.ProxyDeleteResponse;
    proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;
    statusCode: number;
}
