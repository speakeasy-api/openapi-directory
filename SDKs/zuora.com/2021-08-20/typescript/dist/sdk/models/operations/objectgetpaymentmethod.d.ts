import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ObjectGetPaymentMethodPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ObjectGetPaymentMethodQueryParams extends SpeakeasyBase {
    fields?: string;
}
export declare class ObjectGetPaymentMethodHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class ObjectGetPaymentMethodRequest extends SpeakeasyBase {
    pathParams: ObjectGetPaymentMethodPathParams;
    queryParams: ObjectGetPaymentMethodQueryParams;
    headers: ObjectGetPaymentMethodHeaders;
}
export declare class ObjectGetPaymentMethodResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    proxyGetPaymentMethod?: shared.ProxyGetPaymentMethod;
    proxyNoDataResponse?: shared.ProxyNoDataResponse;
    proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;
    statusCode: number;
}
