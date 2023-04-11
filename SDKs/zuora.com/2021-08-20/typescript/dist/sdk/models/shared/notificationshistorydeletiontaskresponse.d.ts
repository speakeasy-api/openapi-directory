import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The status of the notification history deletion task.
 */
export declare enum NotificationsHistoryDeletionTaskResponseStatusEnum {
    Running = "RUNNING",
    Finished = "FINISHED",
    Failed = "FAILED"
}
/**
 * The notification history deletion task information.
 */
export declare class NotificationsHistoryDeletionTaskResponse extends SpeakeasyBase {
    /**
     * The ID of the account whose notification histories are deleted by the current deletion task.
     */
    accountId?: string;
    /**
     * The ID of the user who submits the notification history deletion task.
     */
    createdBy?: string;
    /**
     * The timestamp when the notification history deletion task is created.
     */
    createdOn?: number;
    /**
     * The ID of the notification history deletion task.
     */
    id?: string;
    /**
     * The status of the notification history deletion task.
     */
    status?: NotificationsHistoryDeletionTaskResponseStatusEnum;
    /**
     * The ID of the tenant where the notification history deletion task runs.
     */
    tenantId?: string;
}
