import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ObjectPostProductRatePlanChargeQueryParams extends SpeakeasyBase {
    rejectUnknownFields?: boolean;
}
export declare class ObjectPostProductRatePlanChargeHeaders extends SpeakeasyBase {
    xZuoraWSDLVersion?: string;
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class ObjectPostProductRatePlanChargeRequest extends SpeakeasyBase {
    queryParams: ObjectPostProductRatePlanChargeQueryParams;
    headers: ObjectPostProductRatePlanChargeHeaders;
    request: Record<string, any>;
}
export declare class ObjectPostProductRatePlanChargeResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    proxyCreateOrModifyResponse?: shared.ProxyCreateOrModifyResponse;
    proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;
    statusCode: number;
}
