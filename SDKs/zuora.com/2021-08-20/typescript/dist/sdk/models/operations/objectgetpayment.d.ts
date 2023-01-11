import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ObjectGetPaymentPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ObjectGetPaymentHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class ObjectGetPaymentRequest extends SpeakeasyBase {
    pathParams: ObjectGetPaymentPathParams;
    headers: ObjectGetPaymentHeaders;
}
export declare class ObjectGetPaymentResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    proxyGetPayment?: Record<string, any>;
    proxyNoDataResponse?: shared.ProxyNoDataResponse;
    proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;
    statusCode: number;
}
