import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ObjectGetExportPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ObjectGetExportQueryParams extends SpeakeasyBase {
    fields?: string;
}
export declare class ObjectGetExportHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class ObjectGetExportRequest extends SpeakeasyBase {
    pathParams: ObjectGetExportPathParams;
    queryParams: ObjectGetExportQueryParams;
    headers: ObjectGetExportHeaders;
}
export declare class ObjectGetExportResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    proxyGetExport?: shared.ProxyGetExport;
    proxyNoDataResponse?: shared.ProxyNoDataResponse;
    proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;
    statusCode: number;
}
