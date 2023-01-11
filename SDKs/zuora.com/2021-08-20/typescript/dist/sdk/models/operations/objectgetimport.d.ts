import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ObjectGetImportPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ObjectGetImportQueryParams extends SpeakeasyBase {
    fields?: string;
}
export declare class ObjectGetImportHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class ObjectGetImportRequest extends SpeakeasyBase {
    pathParams: ObjectGetImportPathParams;
    queryParams: ObjectGetImportQueryParams;
    headers: ObjectGetImportHeaders;
}
export declare class ObjectGetImportResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    proxyGetImport?: shared.ProxyGetImport;
    proxyNoDataResponse?: shared.ProxyNoDataResponse;
    proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;
    statusCode: number;
}
