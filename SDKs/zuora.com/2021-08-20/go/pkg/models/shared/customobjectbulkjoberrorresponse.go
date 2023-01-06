package shared

type CustomObjectBulkJobErrorResponse struct {
	Code    *int64                 `json:"code,omitempty"`
	Message *string                `json:"message,omitempty"`
	Record  map[string]interface{} `json:"record,omitempty"`
	Row     *int64                 `json:"row,omitempty"`
}
