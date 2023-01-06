package shared

type UpdateTaskStatusEnum string

const (
	UpdateTaskStatusEnumQueued     UpdateTaskStatusEnum = "Queued"
	UpdateTaskStatusEnumProcessing UpdateTaskStatusEnum = "Processing"
	UpdateTaskStatusEnumPending    UpdateTaskStatusEnum = "Pending"
	UpdateTaskStatusEnumSuccess    UpdateTaskStatusEnum = "Success"
	UpdateTaskStatusEnumStopped    UpdateTaskStatusEnum = "Stopped"
	UpdateTaskStatusEnumError      UpdateTaskStatusEnum = "Error"
)

// UpdateTask
// A task.
type UpdateTask struct {
	ActionType      *string               `json:"action_type,omitempty"`
	CallType        *string               `json:"call_type,omitempty"`
	ConcurrentLimit *int64                `json:"concurrent_limit,omitempty"`
	ID              int64                 `json:"id"`
	Name            *string               `json:"name,omitempty"`
	Object          *string               `json:"object,omitempty"`
	ObjectID        *string               `json:"object_id,omitempty"`
	Status          *UpdateTaskStatusEnum `json:"status,omitempty"`
	Tags            []string              `json:"tags,omitempty"`
	WorkflowID      *int64                `json:"workflow_id,omitempty"`
}
