import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ObjectGetInvoiceSplitPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ObjectGetInvoiceSplitQueryParams extends SpeakeasyBase {
    fields?: string;
}
export declare class ObjectGetInvoiceSplitHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class ObjectGetInvoiceSplitRequest extends SpeakeasyBase {
    pathParams: ObjectGetInvoiceSplitPathParams;
    queryParams: ObjectGetInvoiceSplitQueryParams;
    headers: ObjectGetInvoiceSplitHeaders;
}
export declare class ObjectGetInvoiceSplitResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    proxyGetInvoiceSplit?: shared.ProxyGetInvoiceSplit;
    proxyNoDataResponse?: shared.ProxyNoDataResponse;
    proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;
    statusCode: number;
}
