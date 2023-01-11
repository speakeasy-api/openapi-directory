import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ObjectPostExportQueryParams extends SpeakeasyBase {
    rejectUnknownFields?: boolean;
}
export declare class ObjectPostExportHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class ObjectPostExportRequest extends SpeakeasyBase {
    queryParams: ObjectPostExportQueryParams;
    headers: ObjectPostExportHeaders;
    request: shared.ProxyCreateExport;
}
export declare class ObjectPostExportResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    proxyBadRequestResponse?: shared.ProxyBadRequestResponse;
    proxyCreateOrModifyResponse?: shared.ProxyCreateOrModifyResponse;
    proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;
    statusCode: number;
}
