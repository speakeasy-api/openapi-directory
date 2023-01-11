import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetGetNotificationHistoryDeletionTaskPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetGetNotificationHistoryDeletionTaskHeaders extends SpeakeasyBase {
    authorization: string;
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetGetNotificationHistoryDeletionTaskRequest extends SpeakeasyBase {
    pathParams: GetGetNotificationHistoryDeletionTaskPathParams;
    headers: GetGetNotificationHistoryDeletionTaskHeaders;
}
export declare class GetGetNotificationHistoryDeletionTaskResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    headers: Record<string, string[]>;
    notificationsHistoryDeletionTaskResponse?: shared.NotificationsHistoryDeletionTaskResponse;
    statusCode: number;
}
