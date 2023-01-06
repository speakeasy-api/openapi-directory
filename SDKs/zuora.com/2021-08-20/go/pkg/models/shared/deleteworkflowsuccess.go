package shared

type DeleteWorkflowSuccess struct {
	ID      *string `json:"id,omitempty"`
	Success *bool   `json:"success,omitempty"`
}
