import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ObjectPutInvoicePathParams extends SpeakeasyBase {
    id: string;
}
export declare class ObjectPutInvoiceQueryParams extends SpeakeasyBase {
    rejectUnknownFields?: boolean;
}
export declare class ObjectPutInvoiceHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class ObjectPutInvoiceRequest extends SpeakeasyBase {
    pathParams: ObjectPutInvoicePathParams;
    queryParams: ObjectPutInvoiceQueryParams;
    headers: ObjectPutInvoiceHeaders;
    request: Record<string, any>;
}
export declare class ObjectPutInvoiceResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    proxyCreateOrModifyResponse?: shared.ProxyCreateOrModifyResponse;
    proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;
    statusCode: number;
}
