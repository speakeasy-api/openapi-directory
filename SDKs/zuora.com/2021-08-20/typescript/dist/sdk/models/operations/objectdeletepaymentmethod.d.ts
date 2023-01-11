import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ObjectDeletePaymentMethodPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ObjectDeletePaymentMethodHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class ObjectDeletePaymentMethodRequest extends SpeakeasyBase {
    pathParams: ObjectDeletePaymentMethodPathParams;
    headers: ObjectDeletePaymentMethodHeaders;
}
export declare class ObjectDeletePaymentMethodResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    proxyDeleteResponse?: shared.ProxyDeleteResponse;
    proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;
    statusCode: number;
}
