package shared

type DeleteWorkflowError struct {
	Errors []string `json:"Errors,omitempty"`
}
