import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEventTriggerPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetEventTriggerHeaders extends SpeakeasyBase {
    authorization: string;
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetEventTriggerRequest extends SpeakeasyBase {
    pathParams: GetEventTriggerPathParams;
    headers: GetEventTriggerHeaders;
}
export declare class GetEventTriggerResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    eventTrigger?: shared.EventTrigger;
    headers: Record<string, string[]>;
    statusCode: number;
}
