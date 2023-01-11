import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ObjectDeleteInvoicePathParams extends SpeakeasyBase {
    id: string;
}
export declare class ObjectDeleteInvoiceHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class ObjectDeleteInvoiceRequest extends SpeakeasyBase {
    pathParams: ObjectDeleteInvoicePathParams;
    headers: ObjectDeleteInvoiceHeaders;
}
export declare class ObjectDeleteInvoiceResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    proxyDeleteResponse?: shared.ProxyDeleteResponse;
    proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;
    statusCode: number;
}
