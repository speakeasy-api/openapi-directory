import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetQueryNotificationDefinitionsQueryParams extends SpeakeasyBase {
    emailTemplateId?: string;
    eventTypeName?: string;
    limit?: number;
    profileId?: string;
    start?: number;
}
export declare class GetQueryNotificationDefinitionsHeaders extends SpeakeasyBase {
    authorization: string;
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetQueryNotificationDefinitions200ApplicationJson extends SpeakeasyBase {
    data?: shared.GetPublicNotificationDefinitionResponse[];
    next?: string;
}
export declare class GetQueryNotificationDefinitionsRequest extends SpeakeasyBase {
    queryParams: GetQueryNotificationDefinitionsQueryParams;
    headers: GetQueryNotificationDefinitionsHeaders;
}
export declare class GetQueryNotificationDefinitionsResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    getQueryNotificationDefinitions200ApplicationJSONObject?: GetQueryNotificationDefinitions200ApplicationJson;
    headers: Record<string, string[]>;
    statusCode: number;
}
