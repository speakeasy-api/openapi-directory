import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ObjectGetInvoiceSplitItemPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ObjectGetInvoiceSplitItemQueryParams extends SpeakeasyBase {
    fields?: string;
}
export declare class ObjectGetInvoiceSplitItemHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class ObjectGetInvoiceSplitItemRequest extends SpeakeasyBase {
    pathParams: ObjectGetInvoiceSplitItemPathParams;
    queryParams: ObjectGetInvoiceSplitItemQueryParams;
    headers: ObjectGetInvoiceSplitItemHeaders;
}
export declare class ObjectGetInvoiceSplitItemResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    proxyGetInvoiceSplitItem?: shared.ProxyGetInvoiceSplitItem;
    proxyNoDataResponse?: shared.ProxyNoDataResponse;
    proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;
    statusCode: number;
}
