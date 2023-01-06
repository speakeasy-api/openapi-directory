package shared

type NotificationsHistoryDeletionTaskResponseStatusEnum string

const (
	NotificationsHistoryDeletionTaskResponseStatusEnumRunning  NotificationsHistoryDeletionTaskResponseStatusEnum = "RUNNING"
	NotificationsHistoryDeletionTaskResponseStatusEnumFinished NotificationsHistoryDeletionTaskResponseStatusEnum = "FINISHED"
	NotificationsHistoryDeletionTaskResponseStatusEnumFailed   NotificationsHistoryDeletionTaskResponseStatusEnum = "FAILED"
)

// NotificationsHistoryDeletionTaskResponse
// The notification history deletion task information.
type NotificationsHistoryDeletionTaskResponse struct {
	AccountID *string                                             `json:"accountId,omitempty"`
	CreatedBy *string                                             `json:"createdBy,omitempty"`
	CreatedOn *int64                                              `json:"createdOn,omitempty"`
	ID        *string                                             `json:"id,omitempty"`
	Status    *NotificationsHistoryDeletionTaskResponseStatusEnum `json:"status,omitempty"`
	TenantID  *string                                             `json:"tenantId,omitempty"`
}
