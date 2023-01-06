package shared

type GetWorkflowResponseStatusEnum string

const (
	GetWorkflowResponseStatusEnumQueued     GetWorkflowResponseStatusEnum = "Queued"
	GetWorkflowResponseStatusEnumProcessing GetWorkflowResponseStatusEnum = "Processing"
	GetWorkflowResponseStatusEnumStopping   GetWorkflowResponseStatusEnum = "Stopping"
	GetWorkflowResponseStatusEnumStopped    GetWorkflowResponseStatusEnum = "Stopped"
	GetWorkflowResponseStatusEnumFinished   GetWorkflowResponseStatusEnum = "Finished"
)

// GetWorkflowResponseTasks
// An object containing task counts.
type GetWorkflowResponseTasks struct {
	Error      *int64 `json:"error,omitempty"`
	Pending    *int64 `json:"pending,omitempty"`
	Processing *int64 `json:"processing,omitempty"`
	Queued     *int64 `json:"queued,omitempty"`
	Stopped    *int64 `json:"stopped,omitempty"`
	Success    *int64 `json:"success,omitempty"`
	Total      *int64 `json:"total,omitempty"`
}

type GetWorkflowResponse struct {
	CPUTime            *string                        `json:"cpuTime,omitempty"`
	CreatedAt          *string                        `json:"createdAt,omitempty"`
	FinishedAt         *string                        `json:"finishedAt,omitempty"`
	ID                 *int64                         `json:"id,omitempty"`
	Messages           map[string]interface{}         `json:"messages,omitempty"`
	Name               *string                        `json:"name,omitempty"`
	OriginalWorkflowID *string                        `json:"originalWorkflowId,omitempty"`
	RunTime            *float64                       `json:"runTime,omitempty"`
	Status             *GetWorkflowResponseStatusEnum `json:"status,omitempty"`
	Tasks              *GetWorkflowResponseTasks      `json:"tasks,omitempty"`
	Type               *string                        `json:"type,omitempty"`
	UpdatedAt          *string                        `json:"updatedAt,omitempty"`
}
