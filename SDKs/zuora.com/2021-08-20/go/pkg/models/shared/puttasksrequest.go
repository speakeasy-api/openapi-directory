package shared

type PutTasksRequest struct {
	Data []UpdateTask `json:"data,omitempty"`
}
