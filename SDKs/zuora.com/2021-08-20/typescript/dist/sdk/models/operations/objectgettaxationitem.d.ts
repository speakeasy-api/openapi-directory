import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ObjectGetTaxationItemPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ObjectGetTaxationItemQueryParams extends SpeakeasyBase {
    fields?: string;
}
export declare class ObjectGetTaxationItemHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class ObjectGetTaxationItemRequest extends SpeakeasyBase {
    pathParams: ObjectGetTaxationItemPathParams;
    queryParams: ObjectGetTaxationItemQueryParams;
    headers: ObjectGetTaxationItemHeaders;
}
export declare class ObjectGetTaxationItemResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    proxyGetTaxationItem?: Record<string, any>;
    proxyNoDataResponse?: shared.ProxyNoDataResponse;
    proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;
    statusCode: number;
}
