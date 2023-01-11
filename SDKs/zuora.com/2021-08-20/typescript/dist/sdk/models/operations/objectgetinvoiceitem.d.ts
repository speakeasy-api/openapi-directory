import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ObjectGetInvoiceItemPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ObjectGetInvoiceItemQueryParams extends SpeakeasyBase {
    fields?: string;
}
export declare class ObjectGetInvoiceItemHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class ObjectGetInvoiceItemRequest extends SpeakeasyBase {
    pathParams: ObjectGetInvoiceItemPathParams;
    queryParams: ObjectGetInvoiceItemQueryParams;
    headers: ObjectGetInvoiceItemHeaders;
}
export declare class ObjectGetInvoiceItemResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    proxyGetInvoiceItem?: Record<string, any>;
    proxyNoDataResponse?: shared.ProxyNoDataResponse;
    proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;
    statusCode: number;
}
