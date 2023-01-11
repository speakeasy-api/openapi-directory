import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteDeleteNotificationHistoryForAccountQueryParams extends SpeakeasyBase {
    accountId: string;
}
export declare class DeleteDeleteNotificationHistoryForAccountHeaders extends SpeakeasyBase {
    authorization: string;
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class DeleteDeleteNotificationHistoryForAccountRequest extends SpeakeasyBase {
    queryParams: DeleteDeleteNotificationHistoryForAccountQueryParams;
    headers: DeleteDeleteNotificationHistoryForAccountHeaders;
}
export declare class DeleteDeleteNotificationHistoryForAccountResponse extends SpeakeasyBase {
    contentType: string;
    deleteDELETENotificationHistoryForAccount400ApplicationJSONString?: string;
    errorResponse?: shared.ErrorResponse;
    headers: Record<string, string[]>;
    notificationsHistoryDeletionTaskResponse?: shared.NotificationsHistoryDeletionTaskResponse;
    statusCode: number;
}
