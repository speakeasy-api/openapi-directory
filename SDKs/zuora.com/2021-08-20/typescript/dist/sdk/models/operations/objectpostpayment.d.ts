import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ObjectPostPaymentQueryParams extends SpeakeasyBase {
    rejectUnknownFields?: boolean;
}
export declare class ObjectPostPaymentHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class ObjectPostPaymentRequest extends SpeakeasyBase {
    queryParams: ObjectPostPaymentQueryParams;
    headers: ObjectPostPaymentHeaders;
    request: Record<string, any>;
}
export declare class ObjectPostPaymentResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    proxyBadRequestResponse?: shared.ProxyBadRequestResponse;
    proxyCreateOrModifyResponse?: shared.ProxyCreateOrModifyResponse;
    proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;
    statusCode: number;
}
