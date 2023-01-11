import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteEventTriggerPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteEventTriggerHeaders extends SpeakeasyBase {
    authorization: string;
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class DeleteEventTriggerRequest extends SpeakeasyBase {
    pathParams: DeleteEventTriggerPathParams;
    headers: DeleteEventTriggerHeaders;
}
export declare class DeleteEventTriggerResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    headers: Record<string, string[]>;
    statusCode: number;
}
