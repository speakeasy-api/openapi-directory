package shared

type ExecuteResult struct {
	Errors  []ActionsErrorResponse `json:"Errors,omitempty"`
	ID      *string                `json:"Id,omitempty"`
	Success *bool                  `json:"Success,omitempty"`
}
