package shared

type PostCustomObjectRecordsResponse struct {
	Error   *CustomObjectRecordsErrorResponse `json:"error,omitempty"`
	Records []map[string]interface{}          `json:"records,omitempty"`
}
