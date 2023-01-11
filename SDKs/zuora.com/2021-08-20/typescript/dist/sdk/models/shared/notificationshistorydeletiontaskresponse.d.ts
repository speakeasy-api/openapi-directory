import { SpeakeasyBase } from "../../../internal/utils";
export declare enum NotificationsHistoryDeletionTaskResponseStatusEnum {
    Running = "RUNNING",
    Finished = "FINISHED",
    Failed = "FAILED"
}
/**
 * The notification history deletion task information.
**/
export declare class NotificationsHistoryDeletionTaskResponse extends SpeakeasyBase {
    accountId?: string;
    createdBy?: string;
    createdOn?: number;
    id?: string;
    status?: NotificationsHistoryDeletionTaskResponseStatusEnum;
    tenantId?: string;
}
