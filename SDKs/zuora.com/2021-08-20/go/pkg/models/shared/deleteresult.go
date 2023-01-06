package shared

type DeleteResult struct {
	Errors  []ActionsErrorResponse `json:"errors,omitempty"`
	ID      *string                `json:"id,omitempty"`
	Success *bool                  `json:"success,omitempty"`
}
