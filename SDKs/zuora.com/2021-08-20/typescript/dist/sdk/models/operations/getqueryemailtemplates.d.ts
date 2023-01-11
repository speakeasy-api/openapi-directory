import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetQueryEmailTemplatesQueryParams extends SpeakeasyBase {
    eventTypeName?: string;
    limit?: number;
    name?: string;
    start?: number;
}
export declare class GetQueryEmailTemplatesHeaders extends SpeakeasyBase {
    authorization: string;
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetQueryEmailTemplates200ApplicationJson extends SpeakeasyBase {
    data?: shared.GetPublicEmailTemplateResponse[];
    next?: string;
}
export declare class GetQueryEmailTemplatesRequest extends SpeakeasyBase {
    queryParams: GetQueryEmailTemplatesQueryParams;
    headers: GetQueryEmailTemplatesHeaders;
}
export declare class GetQueryEmailTemplatesResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    getQueryEmailTemplates200ApplicationJSONObject?: GetQueryEmailTemplates200ApplicationJson;
    headers: Record<string, string[]>;
    statusCode: number;
}
