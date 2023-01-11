import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ObjectGetInvoicePathParams extends SpeakeasyBase {
    id: string;
}
export declare class ObjectGetInvoiceQueryParams extends SpeakeasyBase {
    fields?: string;
}
export declare class ObjectGetInvoiceHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class ObjectGetInvoiceRequest extends SpeakeasyBase {
    pathParams: ObjectGetInvoicePathParams;
    queryParams: ObjectGetInvoiceQueryParams;
    headers: ObjectGetInvoiceHeaders;
}
export declare class ObjectGetInvoiceResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    proxyGetInvoice?: Record<string, any>;
    proxyNoDataResponse?: shared.ProxyNoDataResponse;
    proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;
    statusCode: number;
}
