import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GETGETNotificationHistoryDeletionTaskRequest extends SpeakeasyBase {
    /**
     * `Bearer {token}` for a valid OAuth token.
     *
     * @remarks
     *
     * Note that you must regenerate the OAuth token after the Custom Events feature is enabled in your Zuora tenant. The OAuth tokens generated before this feature is turned on will not work.
     *
     */
    authorization: string;
    /**
     * An entity ID. If you have [Zuora Multi-entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity) enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you do not need to set this header.
     *
     * @remarks
     *
     */
    zuoraEntityIds?: string;
    /**
     * A custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.
     *
     * @remarks
     *
     * The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (`:`), semicolon (`;`), double quote (`"`), and quote (`'`).
     *
     */
    zuoraTrackId?: string;
    /**
     * The ID of the notification history deletion task. You can get the deletion task ID from the 202 response body of the [Delete notification histories for an account](https://www.zuora.com/developer/api-reference/#operation/DELETE_Delete_Notification_History_For_Account) operation.
     *
     * @remarks
     *
     */
    id: string;
}
export declare class GETGETNotificationHistoryDeletionTaskResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Not Found
     */
    errorResponse?: shared.ErrorResponse;
    headers?: Record<string, string[]>;
    /**
     * OK
     */
    notificationsHistoryDeletionTaskResponse?: shared.NotificationsHistoryDeletionTaskResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
