import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ObjectGetAccountPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ObjectGetAccountQueryParams extends SpeakeasyBase {
    fields?: string;
}
export declare class ObjectGetAccountHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class ObjectGetAccountRequest extends SpeakeasyBase {
    pathParams: ObjectGetAccountPathParams;
    queryParams: ObjectGetAccountQueryParams;
    headers: ObjectGetAccountHeaders;
}
export declare class ObjectGetAccountResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    proxyGetAccount?: Record<string, any>;
    proxyNoDataResponse?: shared.ProxyNoDataResponse;
    proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;
    statusCode: number;
}
