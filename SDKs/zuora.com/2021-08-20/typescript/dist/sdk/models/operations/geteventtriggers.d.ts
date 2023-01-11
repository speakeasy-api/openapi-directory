import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEventTriggersQueryParams extends SpeakeasyBase {
    active?: string;
    baseObject?: string;
    eventTypeName?: string;
    limit?: number;
    start?: number;
}
export declare class GetEventTriggersHeaders extends SpeakeasyBase {
    authorization: string;
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetEventTriggers200ApplicationJson extends SpeakeasyBase {
    data?: shared.EventTrigger[];
    next?: string;
}
export declare class GetEventTriggersRequest extends SpeakeasyBase {
    queryParams: GetEventTriggersQueryParams;
    headers: GetEventTriggersHeaders;
}
export declare class GetEventTriggersResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    getEventTriggers200ApplicationJSONObject?: GetEventTriggers200ApplicationJson;
    headers: Record<string, string[]>;
    statusCode: number;
}
