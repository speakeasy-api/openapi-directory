package shared

type WorkflowTypeEnum string

const (
	WorkflowTypeEnumWorkflowSetup    WorkflowTypeEnum = "Workflow::Setup"
	WorkflowTypeEnumWorkflowInstance WorkflowTypeEnum = "Workflow::Instance"
)

// Workflow
// A workflow.
type Workflow struct {
	CalloutTrigger   *bool             `json:"calloutTrigger,omitempty"`
	CreatedAt        *string           `json:"createdAt,omitempty"`
	Description      *string           `json:"description,omitempty"`
	ID               *int64            `json:"id,omitempty"`
	Interval         *string           `json:"interval,omitempty"`
	Name             *string           `json:"name,omitempty"`
	OndemandTrigger  *bool             `json:"ondemandTrigger,omitempty"`
	ScheduledTrigger *bool             `json:"scheduledTrigger,omitempty"`
	Timezone         *string           `json:"timezone,omitempty"`
	Type             *WorkflowTypeEnum `json:"type,omitempty"`
	UpdatedAt        *string           `json:"updatedAt,omitempty"`
}
