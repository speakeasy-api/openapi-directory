import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ObjectDeletePaymentPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ObjectDeletePaymentHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class ObjectDeletePaymentRequest extends SpeakeasyBase {
    pathParams: ObjectDeletePaymentPathParams;
    headers: ObjectDeletePaymentHeaders;
}
export declare class ObjectDeletePaymentResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    proxyDeleteResponse?: shared.ProxyDeleteResponse;
    proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;
    statusCode: number;
}
