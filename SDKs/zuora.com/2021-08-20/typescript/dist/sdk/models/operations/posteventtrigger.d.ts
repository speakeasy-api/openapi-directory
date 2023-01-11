import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostEventTriggerHeaders extends SpeakeasyBase {
    authorization: string;
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PostEventTriggerRequest extends SpeakeasyBase {
    headers: PostEventTriggerHeaders;
    request: shared.PostEventTriggerRequest;
}
export declare class PostEventTriggerResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    eventTrigger?: shared.EventTrigger;
    headers: Record<string, string[]>;
    statusCode: number;
}
