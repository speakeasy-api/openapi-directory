import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ObjectGetContactPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ObjectGetContactQueryParams extends SpeakeasyBase {
    fields?: string;
}
export declare class ObjectGetContactHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class ObjectGetContactRequest extends SpeakeasyBase {
    pathParams: ObjectGetContactPathParams;
    queryParams: ObjectGetContactQueryParams;
    headers: ObjectGetContactHeaders;
}
export declare class ObjectGetContactResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    proxyGetContact?: Record<string, any>;
    proxyNoDataResponse?: shared.ProxyNoDataResponse;
    proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;
    statusCode: number;
}
