package shared

type WorkflowInstanceStatusEnum string

const (
	WorkflowInstanceStatusEnumQueued     WorkflowInstanceStatusEnum = "Queued"
	WorkflowInstanceStatusEnumProcessing WorkflowInstanceStatusEnum = "Processing"
)

// WorkflowInstance
// A instance workflow object.
type WorkflowInstance struct {
	CreatedAt          *string                     `json:"createdAt,omitempty"`
	ID                 *int64                      `json:"id,omitempty"`
	Name               *string                     `json:"name,omitempty"`
	OriginalWorkflowID *int64                      `json:"originalWorkflowId,omitempty"`
	Status             *WorkflowInstanceStatusEnum `json:"status,omitempty"`
	UpdatedAt          *string                     `json:"updatedAt,omitempty"`
}
