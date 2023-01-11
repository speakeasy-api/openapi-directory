import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutEventTriggerPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PutEventTriggerHeaders extends SpeakeasyBase {
    authorization: string;
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PutEventTriggerRequest extends SpeakeasyBase {
    pathParams: PutEventTriggerPathParams;
    headers: PutEventTriggerHeaders;
    request: shared.PutEventTriggerRequest;
}
export declare class PutEventTriggerResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    eventTrigger?: shared.EventTrigger;
    headers: Record<string, string[]>;
    statusCode: number;
}
